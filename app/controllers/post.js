import {postModel} from '../models/postModel.js';
import mongoose from 'mongoose';
export const getDataPost = async (req,res)=>{
        await postModel.find({}).then(e=>{
            console.log(e);
            res.status(200).json(e);
        }).catch(err=>{
            res.status(500).json({error: err});
        })
    };
export const createNew = async (req,res)=>{
    try {
        if(req.files){
            console.log('have file');
            const file = req.files.file;
            file.mv('./public/img/'+file.name),(err)=>{
                if(err){
                    console.log('luu file that bai');
                }
            };
        }
    } catch (error) {
        
    }
    if(req.body){
        if(req.body.title){
            req.body.img = 'http://localhost:4000/img/'+req.body.img;
            const r = new postModel(req.body);
            res.status(200).json(r);
            r.save();
        }
    }
}

export const updatePost = async (req,res)=>{
    try {
        if(req.files){
            console.log('have file');
            const file = req.files.file;
            file.mv('./public/img/'+file.name),(err)=>{
                if(err){
                    console.log('luu file that bai');
                }
            };
        }
    } catch (error) {
        
    }
    if(req.body){
        if(req.body.title){
            if(req.body.img){
                req.body.img = 'http://localhost:4000/img/'+req.body.img;
            };
            await postModel.updateOne({_id:req.body._id},req.body);
            await postModel.findOne({_id:req.body._id}).then(e=>{
                res.status(200).json(e);
            })
        }
    }
}


export const Delete1 = async (req,res)=>{
    if(req.body){
        console.log('delete');
        await postModel.deleteOne({_id:String(req.body._id)});
        res.status(200).json({delete:'success'});
    }
}

