const express = require("express");
const {
    createMainPage,
    getAllMainPage,
    getMainPage,
    deleteMainPage,
    updateMainPage,
    activatePage,
    getActivatePage
} = require("../controller/customizationController");
const router = express.Router();
const {authMiddleware, isAdmin} = require("../midddlewares/authMiddleware");


router.post("/main-page", authMiddleware, isAdmin, createMainPage);
router.get("/main-all-page", getAllMainPage);
router.get("/main-page/", getMainPage);
router.delete("/main-page/",authMiddleware, isAdmin, deleteMainPage);
router.put("/main-page/:id",authMiddleware, isAdmin, updateMainPage);

router.put("/main-page/activate/:id",authMiddleware, isAdmin, activatePage);
router.get("/main-page/get-activate/", getActivatePage);


module.exports = router;