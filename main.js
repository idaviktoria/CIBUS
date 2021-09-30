const express = require('express');


const app = express()
app.use(express.static('public'))
app.use(express.json({limit: '2mb'}));
app.use(express.urlencoded({extended: true}));

app.listen(3000, () => {
    console.log(`Listening at http://localhost:${3000}`)
});


console.log('Hello there');

