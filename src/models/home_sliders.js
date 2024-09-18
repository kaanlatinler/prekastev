import mongoose from "mongoose";

const homeSliderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    },
},{
    timestamps: true,
});

export default mongoose.models.home_sliders || mongoose.model('home_sliders', homeSliderSchema);