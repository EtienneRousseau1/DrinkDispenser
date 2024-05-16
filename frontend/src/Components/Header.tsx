import '../index.css';
import DUEN from '../images/DUEN.png'

const Header: React.FC = () => {
  return (
    <div className="py-4 border-b-2 border-neutral-400">
      <header>
        <div className="flex items-center justify-center" >
          <img src={DUEN} alt="DUEN" />
        </div>
      </header>
    </div>
  );
};

export default Header;
