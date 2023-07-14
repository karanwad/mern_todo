const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mern-todo", {
    useNewURLParser: true,
    useUnifiedTopology: true
})
.them(() => console.log("Connected to DB"))
.catch(console.error);

app.listen(3001, () => console.group("Server started on port 3001"));