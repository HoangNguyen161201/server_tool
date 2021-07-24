import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
},  {timestamps: true});


export const categoriesModel = mongoose.model('category',schema);
