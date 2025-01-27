"use client";
import Link from "next/link";
import "./ProductCard.scss";

const ProductCard = (props) => {
  return (
    <>
      <Link
        key={props.identificator}
        href={`/productpage/${props.identificator}`}
        className="popular__column  __sneaker"
      >
        <img
          className="popular__image __image"
          src={props.image}
          alt={props.name}
        />
        <div className="popular__text-block __text-block">
          <h1 className="popular__name __name">
            {props.name}
          </h1>
          <h2 className="popular__subname __subname">
            {props.subname}
          </h2>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
