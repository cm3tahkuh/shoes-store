import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__menu">
          <a href="index.html" className="footer__title">
            КРОССЫ—И ТОЧКА.
          </a>
          <ul className="footer__nav">
            <li>
              <a className="footer__nav-link" href="#">
                💬 TG
              </a>
            </li>
            <li>
              <a className="footer__nav-link" href="#">
                😊 VK
              </a>
            </li>
            <li>
              <a className="footer__nav-link" href="#">
                📺 YouTube
              </a>
            </li>
          </ul>
        </div>
        <hr className="line"></hr>
        <h6 className="footer__copyright">КРОССЫ И ТОЧКА © 2023</h6>
      </div>
    </footer>
  );
};

export default Footer;
