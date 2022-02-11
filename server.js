const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({extensions: true}));
app.use(express.json());



app.listen(port, () => {
    console.log(`API sever now on port ${port}`);
});