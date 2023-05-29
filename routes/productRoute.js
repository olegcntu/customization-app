const express = require("express");
const {
    createProduct,
    getaProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    addToWishlist,
    rating,
    uploadImages
} = require("../controller/productController");
const router = express.Router();
const {authMiddleware, isAdmin} = require("../midddlewares/authMiddleware");
const {uploadPhoto, productImgResize} = require("../midddlewares/uploadImages");

router.put("/rating", authMiddleware, rating);
router.put("/upload/:id", authMiddleware, isAdmin,
     uploadPhoto.array('images', 10),
     productImgResize,
    uploadImages);
router.put("/wishlist", authMiddleware, addToWishlist);
router.post("/",authMiddleware, isAdmin, createProduct);
router.get("/:id", getaProduct);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id",authMiddleware, isAdmin,  deleteProduct);
router.get("/", getAllProduct);

module.exports = router;