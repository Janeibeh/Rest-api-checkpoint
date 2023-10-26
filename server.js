require("dotenv").config();
const PORT = process.env.PORT

const express = require('express');
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://localhost:27017/Janedb",{},)
.then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Database connection error')
  })

app.get('/user', (req, res) => {
    res.send('Return all users')});


app.post('/user', (req, res) => {
  res.send('Add a new user')});


app.put('/user', (req, res) => {
  res.send('Edit a user by id')});


app.delete('/user', (req, res) => {
  res.send('Remove a user by id')});

app.listen(process.env.PORT, () => {
     console.log(`Server is running at ${PORT}, open browser at http://localhost:${PORT}`)
});