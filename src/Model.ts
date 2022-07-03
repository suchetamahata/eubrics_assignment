import mongoose from "mongoose";

const { Schema, Model } = mongoose

const behaviourSchema = new Schema({
    behaviour:{
        type: String,
        required: true
    }
})

export default mongoose.model("behaviours",  behaviourSchema)