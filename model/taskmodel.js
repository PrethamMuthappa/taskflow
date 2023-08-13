

const mongoose=require('mongoose');
const {Schema , model}=mongoose;

const mytask=Schema({
    tasks:String
},{versionKey: false})

const todo=model('todo',mytask);


module.exports=todo;