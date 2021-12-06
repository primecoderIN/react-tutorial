import React from "react";
import PropTypes from "prop-types";
import DefaultImage from "../../../assets/default-image.jpeg"; //Importing default image to be displayed in case API fecth error occur
//Price of last product is missing because it has not been added in API
//Some files missing can cause application malfunction. Here image could not be loaded
//So application displyed an error
const Product = ({ image, name, price }) => {
  const url = image && image.url; //If image is fetched then only url will be checked
  //In line 12 , if url exists then only url will be displayed else default image will be displayed
  return (
    <article className="product">
      <img src={url || DefaultImage} />
      <h4>{name}</h4>
      <p>{price}</p>
    </article>
  );
};

Product.propTypes = {
  //propTypes is a property in react.
  //This will tell if there is some files missing in API
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
// Product.defaultProps = {
//   name: "Default Name",
//   price: 399,                       this could not solve problem so we are using short circuit operator in product
//   image: DefaultImage,
// };

export default Product;
