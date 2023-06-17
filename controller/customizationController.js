const MainPage = require("../models/mainPageModel");
const asyncHandler = require("express-async-handler");


const createMainPage = asyncHandler(async (req, res) => {
    console.log("crate")
    try {
        const newProduct = await MainPage.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error);
    }

});
const getAllMainPage = asyncHandler(async (req, res) => {
    try {
        const getMainPage = await MainPage.find();
        res.json(getMainPage);
    } catch (error) {
        throw new Error(error);
    }
});
const getMainPage = asyncHandler(async (req, res) => {
    const {pageId} = req.body;
    try {
        const getMainPage = await MainPage.findById(pageId);
        res.json(getMainPage);
    } catch (error) {
        throw new Error(error);
    }
});
const deleteMainPage = asyncHandler(async (req, res) => {
    const {pageId} = req.body;
    try {
        const getMainPage = await MainPage.findByIdAndDelete(pageId);
        res.json(getMainPage);
    } catch (error) {
        throw new Error(error);
    }
});
const updateMainPage = asyncHandler(async (req, res) => {
    const {id} = req.params;
    console.log(id)
    try {
        const getMainPage = await MainPage.findByIdAndUpdate(id, req.body);
        res.json(getMainPage);
    } catch (error) {
        throw new Error(error);
    }
});

const activatePage = asyncHandler(async (req, res) => {
    const {id} = req.params;
    console.log(id)
    try {
        const getMainPage = await MainPage.findByIdAndUpdate(id, {isActive: true});
        res.json(getMainPage);
    } catch (error) {
        throw new Error(error);
    }
});

const getActivatePage = asyncHandler(async (req, res) => {
    console.log("222")
    try {
        const activePage = await MainPage.findOne({ isActive: true });
        res.json(activePage);
    } catch (error) {
        throw new Error(error);
    }
});


module.exports = {
    createMainPage,
    getAllMainPage,
    getMainPage,
    deleteMainPage,
    updateMainPage,
    activatePage,
    getActivatePage,
};