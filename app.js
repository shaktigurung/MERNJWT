const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

const User = require('./models/User');

// const userInput = {
//     username: "coder123",
//     password: "123456",
//     role: "admin"
// }

// const user = new User(userInput);
// user.save((err,document)=> {
//     if(err)
//         console.log(err);
//     console.log(document);
// });

app.listen( 5000, () => {
    console.log('express server started');
});