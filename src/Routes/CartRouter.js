const express = require("express");
const router = express.Router();
const CartController = require("../Controllers/CartController");
const CartVerify = require("../Middlewares/CartVerify");
const auth = require("../Middlewares/Auth");

router.get("/", auth.verifyToken, CartController.getAllCarts);

router.get("/:cartId", CartController.getCartById);

router.post(
  "/",
  auth.verifyToken,
<<<<<<< HEAD
  CartVerify.existingVerify,
  CartVerify.missingVerify,
=======
  CartVerify.missingVerify,
  CartVerify.existingVerify,
>>>>>>> ca87b0074156ff00801a5b220dde0ca4b678b10c
  CartController.addNewCart
);

router.put(
  "/:cartId",
  auth.verifyToken,
  CartVerify.missingVerify,
  CartController.updateCart
);

router.delete("/:cartId", auth.verifyToken, CartController.deleteCart);

module.exports = router;
