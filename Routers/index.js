import  express  from "express";
import routerPost from './post.js';
import routerCategories from "./categories.js";
const router = (app)=>{
    app.use('/post',routerPost);
    app.use('/categories',routerCategories);
}
export default router;