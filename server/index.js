const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser = require('body-parser')
const pool=require('./db');

app.use(cors());
app.use(bodyParser.json())

//create a todo
app.post('/todos', async (req,res)=>{
    try {
        const {description} = req.body
        const newtodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING * " , [description]);
        res.json(newtodo.rows[0])
        
    } catch (error) {
        console.error(error)
    }
})

//get all todos
app.get('/alltodos', async(req,res)=>{
    try {
        const alltodos=await pool.query('SELECT * FROM todo ORDER BY todo_id ASC');
        res.json(alltodos.rows)
    } catch (error) {
        res.status(400).json("error found")
    }
    
})


//get a todo
app.get('/todos/:id', async (req,res)=>{
    try {
        const {id} = req.params
        const todoid=await pool.query('SELECT * FROM todo WHERE todo_id= $1' , [id]);
        res.json(todoid.rows[0])

    } catch (error) {
        res.status(400).json("error 404")
    }
})

//update a todo
app.put('/todos/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const {description}=req.body;
        const updatetodo= await pool.query("UPDATE todo SET description =$1 WHERE todo_id=$2",[description,id]);
        res.json("todo updated")

    } catch (error) {
        res.status(400).json("error 404")
    }
})

//delete a todo 
app.delete('/todos/:id', async (req,res)=>{
    try {
        const {id} =req.params
        const deletetodo= await pool.query("DELETE FROM todo WHERE todo_id=$1",[id])
        res.json("todo deleted")
    } catch (error) {
        res.status(400).json("error 404")
    }
})

app.delete('/deletealltodos', async (req,res)=>{
    try {
        const deleteall = await pool.query("TRUNCATE TABLE todo")
        res.json("delted completely")
    } catch (error) {
        res.status(400).json("error 404")
    }
})


app.listen(5000,()=>{
    console.log("running on 5000")
});