//this route is useless and its not connected to any api or other functions
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



module.exports=display;
