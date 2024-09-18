import mongoose from "mongoose";

const homeAboutSchema = new mongoose.Schema({
    message: {
        type: String,
        required: [true, "Message is required"],
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    },
},{
    timestamps: true,
});

export default mongoose.models.home_about || mongoose.model('home_about', homeAboutSchema);