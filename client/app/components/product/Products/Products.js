import ProductCard from "./ProductCard/ProductCard";
import "./Products.scss";

const popularSneakers = [
  {
    href: "sneakers/newbalance/index.html",
    imgSrc: "img/newbalance.png",
    name: "New Balance C-ms574",
    subname: "Salehe Bembury Shark Skin",
  },
  {
    href: "sneakers/dunk/index.html",
    imgSrc: "img/dunk.png",
    name: "Nike Dunk Low SP",
    subname: "Nike Dunk Low Orange Blaze Syracuse",
  },
  {
    href: "sneakers/converse/index.html",
    imgSrc: "img/converse.png",
    name: "Converse Chuck 70 High",
    subname: "Comme des Garcons PLAY Black",
  },
  {
    href: "#",
    imgSrc: "img/airmax.png",
    name: "Nike Air Max Plus",
    subname: "Patta FC Barcelona Culers del Món",
  },
  {
    href: "#",
    imgSrc: "img/jordan1.png",
    name: "Jordan 1 Retro High OG SP",
    subname: "Union LA Bephies Beauty Supply Summer of ‘96",
  },
  {
    href: "#",
    imgSrc: "img/campus.png",
    name: "adidas Campus 00s",
    subname: "Core Black",
  },
  {
    href: "#",
    imgSrc: "img/ugg.png",
    name: "UGG Classic Ultra Mini Boot",
    subname: "Chestnut (Women's)",
  },
  {
    href: "#",
    imgSrc: "img/jordan1low.png",
    name: "Jordan 1 Retro Low Golf",
    subname: "Travis Scott Neutral Olive",
  },
  {
    href: "#",
    imgSrc: "img/yeezy.png",
    name: "adidas Yeezy Foam RNNR",
    subname: "Stone Sage",
  },
];

const Products = () => {
  return (
    <main className="main">
      <section className="popular">
        <div className="container">
          <h1 className="popular__title __title">Коллекция. Октябрь:2024</h1>
          <div className="popular__row __row">
            {popularSneakers.map((card, index) => (
              <ProductCard
                identificator={index}
                routepage={card.href}
                image={card.imgSrc}
                name={card.name}
                subname={card.subname}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
