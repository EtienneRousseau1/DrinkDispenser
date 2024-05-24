import React, { useState } from 'react';

const TroubleShooting: React.FC = () => {
  const [selectedProblem, setSelectedProblem] = useState<string>('');

  const problems: { [key: string]: string[] } = {
    'No power': [
      'Check if the power cable is connected.',
      'Ensure the outlet is working.',
      'Check the fuse or circuit breaker.'
    ],
    'No response from the device': [
      'Restart the device.',
      'Ensure that the Arduino IP is the same as your device',
      'Ensure the device is properly connected with the same IP address as computer running code.'
    ],
    'Error message on screen': [
      'Refer to the problem for the error code.',
      'Restart the device.',
      'Contact Lucas if the problem persists.'
    ]
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Troubleshooting Guide</h2>
        <div className="mb-6">
          <label htmlFor="problem-select" className="block text-gray-700 font-medium mb-2">Select a problem:</label>
          <select
            id="problem-select"
            value={selectedProblem}
            onChange={(e) => setSelectedProblem(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="">--Select a problem--</option>
            {Object.keys(problems).map((problem) => (
              <option key={problem} value={problem}>
                {problem}
              </option>
            ))}
          </select>
        </div>
        {selectedProblem && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Possible Solutions:</h3>
            <ul className="list-disc pl-5">
              {problems[selectedProblem].map((solution, index) => (
                <li key={index} className="mb-2 p-2 bg-gray-100 border border-gray-200 rounded-lg shadow-sm">
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TroubleShooting;

