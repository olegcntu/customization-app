const mongoose = require("mongoose")

var mainPageSchema = new mongoose.Schema(
    {
        mainPictureText: {
            text1: String,
            text2: String,
            text3: String,
        },
        firstPictureText: {
            text1: String,
            text2: String,
            text3: String,
        },
        secondPictureText: {
            text1: String,
            text2: String,
            text3: String,
        },
        thirdPictureText: {
            text1: String,
            text2: String,
            text3: String,
        },
        fourthPictureText: {
            text1: String,
            text2: String,
            text3: String,
        },
        isActive: {
            type: Boolean,
            default: false
        }

    },
    {timestamps: true}
);
module.exports = mongoose.model("MainPage", mainPageSchema)