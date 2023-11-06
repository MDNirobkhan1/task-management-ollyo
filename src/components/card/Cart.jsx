/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import PropTypes from "prop-types";
import "./Cart.css";
import { useRef } from "react";
const Cart = ({ product, handleAddToCart }) => {
  const { image } = product;
 

  
  return (
    
    <>
      <div className="card" draggable
        
      >
        <input
          onClick={() => handleAddToCart(product)}
          type="checkbox"
          className="check"
        />
        <img src={image} alt="Add Image" />
      </div>
    </>
  );
};

Cart.propTypes = {
  product: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.object.isRequired,
};
export default Cart;
