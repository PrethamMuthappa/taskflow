
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express(); // Define the app instance
const router = express.Router();
const todo = require('../model/taskmodel');

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { error, handler } = require('../middleware/errorhandle');
const { log } = require('console');

// Define the POST route to add tasks
router.post('/', async (req, res) => {
  try {
    const { data } = req.body;

    const todos = await new todo({
      tasks: data
    });

    await todos.save();

    res.redirect('/add'); // Redirect to the GET route to render the view
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

// Define the GET route to render the view
router.get('/', async (req, res) => {
  try {
    const mytasks = await todo.find().exec();
    res.render('index', {
      mytasks: mytasks
    });
    console.log(mytasks)
    res.redirect('/add')
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

router.post('/delete/:id',async(req,res)=>{
  const taskid=req.params.id;
  const del=await todo.deleteOne();
  res.render('index',{
    del:del
  })
})

app.use('/', router); // Mount the router on the main app

module.exports = app;

