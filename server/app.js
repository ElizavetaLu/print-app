const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router');
const app = express();

mongoose.connect('mongodb://localhost:27017/print');

app.use(morgan('combined'));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(cors());


router(app);


const port = process.env.PORT || 5050;
const server = http.createServer(app);
server.listen(port);

console.log('Server listening on:', port);