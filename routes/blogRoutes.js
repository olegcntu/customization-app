const express = require("express");
const {
    createBlog,
    updateBlog,
    getBlog,
    getAllBlogs,
    deleteBlog,
    liketheBlog,
    disliketheBlog,
    uploadImages,
} = require("../controller/blogController");
const {authMiddleware, isAdmin} = require("../midddlewares/authMiddleware");
const {blogImgResize, uploadPhoto} = require("../midddlewares/uploadImages");
const router = express.Router();


router.put("/upload/:id",
    authMiddleware,
    isAdmin,
    uploadPhoto.array('images', 2),
    blogImgResize,
    uploadImages
);
router.post("/", authMiddleware, isAdmin, createBlog);
router.put("/likes", authMiddleware, liketheBlog);
router.put("/dislikes", authMiddleware, disliketheBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.get("/:id", getBlog);
router.get("/", getAllBlogs);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;