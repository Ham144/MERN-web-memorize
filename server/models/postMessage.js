import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    likeCount:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date    
    }
});
const postMassage = mongoose.model('PostMessage', postSchema)
export default postMassage  