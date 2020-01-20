//archivo raiz del servidor Node.js
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const url = 'mongodb://localhost/blogDb';
const User = require('./user');

//Body-parser(middleware)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//configuracion e inicio servidor
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto ', app.get('port'));
})

//conectar a BD
app.post('/api/user/login', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
        if (err) throw err;
        User.find({
            username: req.body.username, password: req.body.password
        }, function (err, user) {
            if (err) throw err;
            if (user.length === 1) {
                return res.status(200).json({
                    status: 'success',
                    data: user
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Login Failed'
                })
            }
        })
    });
})
