const express=require('express');
const mongose=require('mongoose')
const router=express.Router();

const todo=require('../model/taskmodel')

router.use((req,res,next)=>{
    console.log("add req url")
    next()
})


router.post('/add',async(req,res)=>{
    
const{ data}=req.body;

const dataset=await new todo({
  task:data
})
    
})



module.exports=router;