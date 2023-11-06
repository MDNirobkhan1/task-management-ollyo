import PropTypes from "prop-types";

import { useEffect, useRef, useState } from "react";
import "./Home.css";
import Cart from "./card/Cart";
import Gallery from "./Gallery/Gallery";


const Home = () => {
  const [products, setProduct] = useState([]);

  const [cart, setCart] = useState([]);
  const formRef = useRef();

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  const handleAddToCart = (product) => {
    let isAvailable = cart.find((item) => item.id === product.id);
    if (isAvailable) {
      const newCart = cart.filter((item) => item.id !== product.id);
      setCart(newCart);
    } else {
      const newCart = [...cart, product];
      setCart(newCart);
    }
  };
  const handleRemoveCart = () => {
    setCart([]);
    formRef.current.reset();
  };
  return (
    <>
      <Gallery cart={cart} handleRemoveCart={handleRemoveCart}></Gallery>
      <form
        ref={formRef}
        className="products  bg-red-100 grid md:grid-cols-12 gap-5"
      >
        {products.map((product, index) =>
          index === 0 ? (
            <div key={product.id} className="md:col-span-4 xl:col-span-3   ">
              <Cart product={product} handleAddToCart={handleAddToCart} />
            </div>
          ) : (
            <div key={product.id} className="md:col-span-4 xl:col-span-3 ">
              <Cart product={product} handleAddToCart={handleAddToCart} />
            </div>
          )
        )}
      </form>
    </>
  );
};

Home.propTypes = {
  Home: PropTypes.array.isRequired,
};
export default Home;
