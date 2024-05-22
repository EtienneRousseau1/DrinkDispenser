#include "WiFiS3.h"
#include "arduino_secrets.h" 

char ssid[] = SECRET_SSID;        // your network SSID (name)
char pass[] = SECRET_PASS;    // your network password (use for WPA, or use as key for WEP)
int lastid = -1; 
const int PUMP_OPEN = 8000; const int PUMP_CLOSE = 8000;
const int DISPENSE_FACTOR = 15;

WiFiServer server(80); // Initialize WebServer on port 80

// Pins for controlling valves
const int valvePins[] = {9, 10, 11, 12}; // Adjust pins according to your setup
const int numValves = 4;

int status = WL_IDLE_STATUS;
// Pin for controlling the pump
const int pumpPin = 8; // Adjust pin according to your setup

void setup() {
  Serial.begin(9600);
  delay(500);

  for (int i = 0; i < numValves; i++) {
    pinMode(valvePins[i], OUTPUT);
    digitalWrite(valvePins[i], HIGH); // Ensure all valves are initially closed
  }

    // check for the WiFi module:
  if (WiFi.status() == WL_NO_MODULE) {
    Serial.println("Communication with WiFi module failed!");
    // don't continue
    while (true);
  }

  String fv = WiFi.firmwareVersion();
  if (fv < WIFI_FIRMWARE_LATEST_VERSION) {
    Serial.println("Please upgrade the firmware");
  }

  // attempt to connect to WiFi network:
  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to Network named: ");
    Serial.println(ssid);                   // print the network name (SSID);

    // Connect to WPA/WPA2 network. Change this line if using open or WEP network:
    status = WiFi.begin(ssid, pass);
    // wait 10 seconds for connection:
    delay(2000);
  }
  server.begin();                           // start the web server on port 80
  printWifiStatus();   

  pinMode(pumpPin, OUTPUT);
  digitalWrite(pumpPin, HIGH);

}

void loop() {
  
  WiFiClient client = server.available(); // listen for incoming clients
  
  if (client) {                         // if you get a client,
    Serial.println("new client");           // print a message out the serial port
    String currentLine = "";                // make a String to hold incoming data from the client
    while (client.connected()) {            // loop while the client's connected
      if (client.available()) {             // if there's bytes to read from the client,
        char c = client.read();             // read a byte, then
        Serial.write(c);                    // print it out to the serial monitor
        if (c == '\n') {                    // if the byte is a newline character
          if (currentLine.length() == 0) {
            // HTTP headers always start with a response code (e.g. HTTP/1.1 200 OK)
            // and a content-type so the client knows what's coming, then a blank line:
            client.println("HTTP/1.1 200 OK");
            client.println("Access-Control-Allow-Origin:");  
            client.println("Content-type:text/html");  
            client.println();
            
            // The HTTP response ends with another blank line:
            client.println();
            // break out of the while loop:
            break;
          } else {    // if you got a newline, then clear currentLine:
            currentLine = "";
          }
        } else if (c != '\r') {  // if you got anything else but a carriage return character,
          currentLine += c;      // add it to the end of the currentLine
        }
        if (currentLine.startsWith("GET /dispenseDrink")) {
          if (currentLine.length() >= 25) {
            Serial.println(currentLine);
          }
          int startIndex = currentLine.indexOf("/dispenseDrink") + String("/dispenseDrink").length();
          String params = currentLine.substring(startIndex+1);
          int valveNum = params.charAt(0) - '0';
          int id = params.charAt(1) - '0';
          int duration = params.substring(2, 6).toInt();
          if (valveNum >= 0 && valveNum < numValves && id != lastid) {
            handleOpenValve(valveNum, duration, id);
          }    
        } 
    
      }
      
    }
    client.stop();
    Serial.println("Client disconnected");
    
  }
}

void printWifiStatus() {
  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your board's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength:
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
  // print where to go in a browser:
  Serial.print("To see this page in action, open a browser to http://");
  Serial.println(ip);
}


// Handle POST requests to open a valve
void handleOpenValve(int valveNumber, int openDuration, int id) {
  int valveNum = valveNumber;
  int duration = openDuration * DISPENSE_FACTOR; 

  if (valveNum >= 0 && valveNum < numValves && duration >= 1000) {
    Serial.println("Valve num");
    Serial.println(valveNum);
    Serial.println("duration: ");
    Serial.println(duration);
    Serial.println("New id: ");
    Serial.println(id);
    lastid = id;
    // Open the specified valve
    digitalWrite(valvePins[valveNum], LOW);
    delay(PUMP_OPEN); // Valve open delay

    // Start the pump after valve is fully opened
    digitalWrite(pumpPin, LOW);

    // Close the valve after specified duration
    delay(duration);
    digitalWrite(valvePins[valveNum], HIGH); // Close the valve

    // Stop the pump after the valve closes
    delay(PUMP_CLOSE);
    digitalWrite(pumpPin, HIGH);
  }
}


