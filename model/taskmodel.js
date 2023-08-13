<<<<<<< HEAD

const mongoose=require('mongoose');
const {Schema , model}=mongoose;

const mytask=Schema({
    tasks:String
},{versionKey: false})

const todo=model('todo',mytask);

=======

const mongoose=require('mongoose');
const {Schema , model}=mongoose;

const mytask=Schema({
    tasks:String
},{versionKey: false})

const todo=model('todo',mytask);

>>>>>>> cc76bd9678b5e1d5684a07455bc95eb1994b958b
module.exports=todo;