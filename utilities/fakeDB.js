const addToDb = (id) => {
  let shoppingCart = {};

  // get previous data from local storage
  const storedCart = localStorage.getItem("shoppingCart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
};

// Get Stored data from cart
const getToDb = () => {
  let shoppingCart = {};

  // get previous data from local storage
  const storedCart = localStorage.getItem("shoppingCart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  return shoppingCart;
};

// Remove a specific element form local storage
const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shoppingCart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    }
  }
};

// Clear data from local storage 
const clearFromDb = () => {
    localStorage.removeItem("shoppingCart");
}

export { addToDb, getToDb, removeFromDb, clearFromDb};
