const { Cart } = require("../Models/CartModel");
const { Product } = require("../Models/ProductModel");
<<<<<<< HEAD
const JWT = require("jsonwebtoken");
=======
>>>>>>> ca87b0074156ff00801a5b220dde0ca4b678b10c

const missingVerify = async (req, res, next) => {
  const cart = new Cart({ ...req.body });
  let missingProd = [];
  let invalidProd = [];
  for (let i in cart.productList) {
    const currentProduct = await Product.findOne({
      name: cart.productList[i].name,
    });
    if (!currentProduct) {
      missingProd.push(cart.productList[i].name);
    }
    if (currentProduct) {
      if (
        currentProduct.name != cart.productList[i].name ||
        currentProduct.price != cart.productList[i].price ||
        currentProduct.desc != cart.productList[i].desc ||
        currentProduct.image_URL != cart.productList[i].image_URL ||
        currentProduct.createdBy != cart.productList[i].createdBy
      ) {
        invalidProd.push(cart.productList[i].name);
<<<<<<< HEAD
=======
        console.log(invalidProd);
>>>>>>> ca87b0074156ff00801a5b220dde0ca4b678b10c
      }
    }
  }
  if (missingProd.length > 0 || invalidProd.length > 0) {
    res.status(422).json({
      Message: `Erro! Produtos inexistentes ou inválidos no carrinho. ${
        (missingProd, "\n", invalidProd)
      }`,
    });
  } else {
    next();
  }
};

const existingVerify = async (req, res, next) => {
<<<<<<< HEAD
  const cartOwner = JWT.verify(
    req.headers["authorization"],
    process.env.JWT_SECRET
  );
  const existingCart = await Cart.findOne({ ownedBy: cartOwner.id });
=======
  const cart = new Cart({ ...req.body });
  const existingCart = await Cart.findOne({ ownedBy: cart.ownedBy });
>>>>>>> ca87b0074156ff00801a5b220dde0ca4b678b10c
  if (existingCart) {
    res.status(409).send({ message: "Carrinho já existente!" });
  } else {
    next();
  }
};

module.exports = { missingVerify, existingVerify };
