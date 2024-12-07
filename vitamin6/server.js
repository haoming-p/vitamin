import express from 'express'
import mysql from 'mysql2';
import mongoose from 'mongoose';

const app = express()

//MySQL
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'phm940524',
    database:'company_db'
})

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('MySQL connected as id ' + connection.threadId);
});

app.get('/employees', (req, res) => {
    connection.query('SELECT * FROM employees', (error, results, fields) => {
        if (error) throw error;
        res.json(results);
    });
});


//MongoDB
//connection
mongoose.connect('mongodb+srv://ming:C0q2lLF61YrhabMb@cluster0.oxpsu.mongodb.net/companyDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(err => console.log(err));

//define schema
const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    }
}, { 
    collection: 'projects',
    strict: false 
});

//create model
const Project = mongoose.model('Project', ProjectSchema)
//MongoDB connection event listeners
mongoose.connection.on('connected', ()=>{
    console.log('mongodb connected successfully')
})
mongoose.connection.on('error',(err)=>{
    console.error('mongodb connected error', err)
})
//endpoint to get projects from mongoDB
app.get('/projects', async(req, res) => {
    try {
        console.log('Attempting to fetch projects...');
        const projects = await Project.find({});
        console.log('Found projects:', projects);
        res.json(projects);
    } catch(err) {
        console.error('Error fetching projects:', err);
        res.status(500).json({ error: err.message });
    }
});
Project.countDocuments()
    .then(count => {
        console.log(`Number of projects in database: ${count}`);
    })
    .catch(err => {
        console.error('Error counting documents:', err);
    });

app.listen(8003,function(){
    console.log('server is runing on 8003')
})