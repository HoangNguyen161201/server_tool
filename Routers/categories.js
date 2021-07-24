import express from "express";
import {showAll, addNew} from '../app/controllers/categories.js';

const routerCategories = express.Router();
routerCategories.post('/addNew', addNew);
routerCategories.get('/', showAll);
export default routerCategories;
