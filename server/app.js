const express = require('express');
const app = express();



// api routes handlers

const planHandlers = require('./routes/plan');

// Fetch API設定
 
app.use(express.json());
app.get('/',  (req, res) => {
    res.send('');
});

app.use(planHandlers)

app.listen(3000, () => {
    console.log('Start server port:3000');
});