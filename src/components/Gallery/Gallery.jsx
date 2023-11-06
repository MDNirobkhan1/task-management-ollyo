import PropTypes from "prop-types";
import "./Gallery.css";
const Gallery = ({ cart, handleRemoveCart }) => {
  return (
    <div className="gallery">
      <h1 className="ml-4 font-semibold text-lg">
        Gallery: {cart.length} Select File
      </h1>
      <p
        onClick={() => handleRemoveCart(cart)}
        className="mr-4 text-red-600 cursor-pointer"
      >
        Delete File
      </p>
    </div>
  );
};

Gallery.propTypes = {
  cart: PropTypes.object.isRequired,
  handleRemoveCart: PropTypes.object.isRequired,
};

export default Gallery;
