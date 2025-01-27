
import MenuBurger from '../../common/MenuBurger/MenuBurger';
import './Header.scss';


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <a href="index.html" className="header__title">
            КРОССЫ— И ТОЧКА.
          </a>

          <MenuBurger />
        </div>
      </div>
    </header>
  );
};

export default Header;
