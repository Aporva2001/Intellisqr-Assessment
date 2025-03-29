const express= require('express');
const mongoose= require('mongoose');

const router= require('./routes');
const app= express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);

mongoose.connect('mongodb+srv://password_2001:password_2001@cluster0.uli4agj.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0')
.then(app.listen(8080, ()=>{
    console.log("Database connected successfully");
}))
.catch(err =>{
    console.log("Database connection failed");
})
