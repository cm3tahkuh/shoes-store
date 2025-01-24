import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import "./styles/global.scss";




//SEO информация, заголовок сайта, и его описание для поисковой выдачи или соц. сети
export const metadata = {
  title: "КРОУСОУКИ У ХАЧБЕКА",
  description: "зеленый рынок кормит",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
