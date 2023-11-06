/* eslint-disable no-unused-vars */
const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveToCart = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToLs = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  saveToCart(cart);
};

// const removeFromCart = (id) => {
//   const cart = getStoredCart();
//   const remaining = cart.filter((idx) => idx !== id);
//   saveToCart(remaining);
// };
const deleteShopingCart = () => {
  localStorage.removeItem("cart");
};

export { addToLs, getStoredCart, deleteShopingCart };
