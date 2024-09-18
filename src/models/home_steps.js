import mongoose from "mongoose";

const homeStepsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    message: {
        type: String,
        required: [true, "Message is required"],
    },
},{
    timestamps: true,
});

export default mongoose.models.home_steps || mongoose.model('home_steps', homeStepsSchema);