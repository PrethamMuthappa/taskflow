const express=require('express');
const router=express.Router();

router.use((req,res,next)=>{
    console.log("add req url")
    next()
})

router.get('/display',(req,res)=>{
    res.send('displaying')
})

module.exports=router