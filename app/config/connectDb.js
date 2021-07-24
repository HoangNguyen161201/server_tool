import mongoose from 'mongoose';
const url = 'mongodb+srv://admin2:123@cluster0.trnqb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const connectDB = mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}).then(e=>{
    console.log('connect thanh cong');
}).catch(e=>{
    console.log('connect that bai');
})
export default connectDB; 