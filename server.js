
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes.js');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({extensions: true}));
app.use(express.json());

app/use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(port, () => {
    console.log(`API sever now on port ${port}`);
});