
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express(); 
const router = express.Router();
const todo = require('../model/taskmodel');

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { error, handler } = require('../middleware/errorhandle');
const { log } = require('console');

//insert data
router.post('/', async (req, res) => {
  try {
    const { data } = req.body;

    const todos = await new todo({
      tasks: data
    });

    await todos.save();

    res.redirect('/'); 
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

//find and display
router.get('/', async (req, res) => {
  try {
    const mytasks = await todo.find().exec();
    res.render('index', {
      mytasks: mytasks
    });
    console.log(mytasks)
    
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

//update

router.post('/update/:id',async(req,res)=>{
  try{
  const updateid=req.params.id;
  const updateddata=req.body.up;
  await todo.findByIdAndUpdate(updateid,{tasks:updateddata})
  res.redirect('/')
  }
  catch(error)
  {
    console.error(error);
    res.status(500).send('error')
  }
})





//delete 

router.post('/delete/:id',async(req,res)=>{
  try{

  
  const taskid=req.params.id;
  await todo.findByIdAndRemove(taskid);
  res.redirect('/');
  }
  catch(error){
    console.error(error);
    res.status(500).send('error')
  }
})





app.use('/', router);

module.exports = app;
module.exports=router

