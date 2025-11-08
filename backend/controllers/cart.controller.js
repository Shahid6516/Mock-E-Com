let cart = [];

export const addToCart = (req, res) => {
  const { productId, qty, product } = req.body;

  const existing = cart.find((item) => item.productId === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ productId, qty, product });
  }

  res.json(cart);
};

export const getCart = (req, res) => {
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );
  res.json({ items: cart, total });
};

export const removeFromCart = (req, res) => {
  const { productId } = req.params;
  cart = cart.filter((item) => item.productId !== parseInt(productId));
  res.json(cart);
};

export const checkout = (req, res) => {
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );
  const receipt = {
    user: req.body,
    total,
    items: cart,
    date: new Date().toLocaleString(),
  };
  cart = [];
  res.json({ message: "Checkout successful", receipt });
};
