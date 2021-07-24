import express from "express";
import {getDataPost, createNew, updatePost, Delete1} from '../app/controllers/post.js';

const routerPost = express.Router();

routerPost.post('/DeleteElement', Delete1);
routerPost.post('/create', createNew);
routerPost.post('/update', updatePost);
routerPost.get('/', getDataPost);
export default routerPost;