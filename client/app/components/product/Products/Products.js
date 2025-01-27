"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import "./Products.scss";


const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCard = async () => {

      try {

        const response = await fetch('/api/Products/getAllProducts')
        const data = await response.json();
        setData(data);

      } catch (error) {
        console.error("Ошибка при запросе:", error);
      }
    };

    fetchCard();
  }, []);

  return (
    <main className="main">
      <section className="popular">
        <div className="container">
          <h1 className="popular__title __title">Коллекция. Октябрь:2024</h1>
          <div className="popular__row __row">
            {data.map((card) => (
              <ProductCard
                key={card.id}
                identificator={card.id}
                image={card.imagePath}
                name={card.title}
                subname={card.subtitle}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
