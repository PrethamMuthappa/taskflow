<<<<<<< HEAD
const express=require('express');
const mongose=require('mongoose')
const router=express.Router();
const todo=require('../model/taskmodel')
const add=require('../routes/add')

async function display(){

    router.get('/add',async(req,res)=>{
    
        const mytasks= await add.findOne().exec();
        res.render
    })
}



=======
const express=require('express');
const mongose=require('mongoose')
const router=express.Router();
const todo=require('../model/taskmodel')
const add=require('../routes/add')

async function display(){

    router.get('/add',async(req,res)=>{
    
        const mytasks= await add.findOne().exec();
        res.render
    })
}



>>>>>>> cc76bd9678b5e1d5684a07455bc95eb1994b958b
module.exports=display;