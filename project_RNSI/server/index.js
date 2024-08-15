//import express, { urlencoded, static } from 'express';
//import fs from 'fs';
/*const express = require('express');
const fs = require('fs');

const app = express();
const HOST = '127.0.0.1';
const PORT = 8000;

//const { userValidationRules, validate } = require("./models/form");

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use('/css/bootstrap.css', express.static('node_modules/bootstrap/dist/css/bootstrap.css'));

app.get('/', (req, res) => {
    res.render("form");
});

 app.post('/user', (req,res)=>{ 
     if (!req.body) return res.sendStatus(400);

     let IS_INTEGRATION = "IS_INTEGRATION: " + req.body.is_integ;
     let WEEKDEY = "WEEKDEY: " + req.body.Mon + ' ' + req.body.Tue + ' ' + req.body.Wed +
         ' ' + req.body.Thu + ' ' + req.body.Fri + ' ' + req.body.Sat + ' ' + req.body.Sun;
     let START_TIME = "START_TIME: " + req.body.timeSt;
     let END_TIME = "END_TIME: " + req.body.timeEnd;
     let URL_REST_API_FNSI = "URL_REST_API_FNSI: " + req.body.url;
     let TOKEN = "TOKEN: " + req.body.token;
     let result = IS_INTEGRATION + '\n' + WEEKDEY + '\n' + START_TIME + '\n' +
         END_TIME + '\n' + URL_REST_API_FNSI + '\n' + TOKEN;
     fs.writeFile('.env', result, (err, data) => {
         if (err) {
             console.log(err.message);
         }
     });
     console.log(req.body);
     res.send("ok!");
 });
*/
/*app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});*/

/*const server = app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});

app.on('error', (err) => {
    if (err.code === 'EACCES') {
        console.log(`No access to port: ${PORT}`);
    }
});*/

require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const bodyParser = require('body-parser')
//const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
//app.use(express.json())
//app.use(express.urlencoded())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/', router)

// Обработка ошибок, последний Middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()