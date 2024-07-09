const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});