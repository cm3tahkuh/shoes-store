import "./MenuBurger.scss";

const MenuBurger = () => {
  return (
    <div className="header__menu menu">
      <div className="menu__icon">
        <span></span>
      </div>
      <nav className="menu__body">
        <ul className="menu__list">
          <li>
            <a href="" className="menu__link">
              💬 TG
            </a>
          </li>
          <li>
            <a href="" className="menu__link">
              😊 VK
            </a>
          </li>
          <li>
            <a href="" className="menu__link">
              📺 YouTube
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuBurger;
