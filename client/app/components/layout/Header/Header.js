
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
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__list-item">
                <a href="#">💬 TG</a>
              </li>
              <li className="header__list-item">
                <a href="#">😊 VK</a>
              </li>
              <li className="header__list-item">
                <a href="#">📺 YouTube</a>
              </li>
            </ul>
          </nav>
          <MenuBurger />
        </div>
      </div>
    </header>
  );
};

export default Header;
