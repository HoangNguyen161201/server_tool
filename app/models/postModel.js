import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content:{
        type: String,
        require: true
    },
    img: String,
    link:{
        type: String,
        require: true
    },
    id_category:{
        type:  mongoose.Schema.ObjectId,
        ref: 'categories'
    }
},  {timestamps: true});


export const postModel = mongoose.model('post',schema);
