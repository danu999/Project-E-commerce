import React from "react";
import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";

const SingleProduct = () => {
  
  // const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  // const { handleAddToCart } = useContext(Context);
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  const handleButtonClick = () => {
    const phoneNumber = "+6289509374627"; // replace with your own phone number
    const message = "Hello, Welcome to FRINZSTORE_ how can I help you?"; // replace with your own message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url);
  };
  // const decrement = () => {
  //   setQuantity((prevState) => {
  //     if (prevState === 1) return 1;
  //     return prevState - 1;
  //   });
  // // };
  // const increment = () => {
  //   setQuantity((prevState) => prevState + 1);
  // };

  if (!data) return;
  const product = data?.data?.[0]?.attributes;

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                product.img.data[0].attributes.url
              }
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">${product.price}</span>
            <span className="desc">{product.desc}</span>

            <div className="cart-buttons">
              {/* <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div> */}
              <button
                className="add-to-cart-button"
                onClick={handleButtonClick}
                >
                BUY NOW
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:{" "}
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <a href="https://web.facebook.com/"><FaFacebookF size={16} /></a>
                  <a href="https://twitter.com/"><FaTwitter size={16} /></a>
                  <a href="https://instagram.com"><FaInstagram size={16} /></a>
                  <a href="https://id.linkedin.com"><FaLinkedinIn size={16} /></a>
                  <a href="https://id.pinterest.com/"><FaPinterest size={16} /></a>
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
