const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
const { MONGOURI } = require('./keys');
//txV41m3aL4rFnNmh





mongoose.connect(MONGOURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false 
})


mongoose.connect(MONGOURI)
mongoose.connection.on('connected', () => {
    console.log("connected to mongoDB");
})
mongoose.connection.on('error', (err) => {
    console.log("error connecting", err);
})



require('./models/user');
require('./models/comment');

app.use(express.json());
app.use(require('./routes/post'));
app.use(require('./routes/auth'));



app.listen(PORT, () => {
    console.log("Server is running on", PORT);
});