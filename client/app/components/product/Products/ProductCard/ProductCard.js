import "./ProductCard.scss";

const ProductCard = (props) => {
  return (
    <>
      <a
        key={props.identificator}
        href={props.routepage}
        className="popular__column  __sneaker"
      >
        <img
          className="popular__image __image"
          src={props.image}
          alt={props.name}
        />
        <div className="popular__text-block __text-block">
          <h1 href="#" className="popular__name __name">
            {props.name}
          </h1>
          <h2 href="#" className="popular__subname __subname">
            {props.subname}
          </h2>
        </div>
      </a>
    </>
  );
};

export default ProductCard;
