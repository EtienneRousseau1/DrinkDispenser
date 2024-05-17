import Apple from '../images/Apple.png';
import Gwater from '../images/Gwater.png';
import Cran from '../images/Cran.png';
import Lemonade from '../images/Lemonade.png';
import Option from '../Components/Option';
import SelectedDrinks from '../Components/SelectedDrinks';

const drinks = [
  { src: Gwater, alt: 'Water', title: 'Water' },
  { src: Apple, alt: 'Apple Juice', title: 'Apple Juice' },
  { src: Cran, alt: 'Cranberry Juice', title: 'Cranberry Juice' },
  { src: Lemonade, alt: 'Lemonade', title: 'Lemonade' },
];

const DrinkOptions: React.FC = () => {
  return (
    <div className="h-screen flex item-center justify-center gap-x-16">
      <div className="m-auto">
        <header className="text-center text-3xl"> Please select a drink </header>
        <Option drinks={drinks} />
        <SelectedDrinks />
        </div>
    </div>
  );
}

export default DrinkOptions;
