import {categoriesModel} from '../models/categories.js';
import path from 'path';
export const showAll = (req,res)=>{
    categoriesModel.find({}).then(dl=>{
        res.status(200).json(dl);
    }).catch(err=>{
        res.status(500).json({error:err});
    })
}

export const addNew = async (req,res)=>{
    if(req.body){
        const r = new categoriesModel(req.body);
        res.status(200).json(r);
        await r.save();
    }
    
}