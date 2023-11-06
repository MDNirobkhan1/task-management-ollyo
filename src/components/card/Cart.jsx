import PropTypes from "prop-types";
import "./Cart.css";
const Cart = ({ product, handleAddToCart }) => {
  const { image } = product;

  return (
    <>
      <div className="card">
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
