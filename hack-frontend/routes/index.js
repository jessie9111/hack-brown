const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../app/models/config');


/*=============================================
=            Routes for users
=============================================*/

router.get('/', (req, res, next) => {
    return res.render('index');
});

router.get('/register', (req, res, next) => {
    return res.render('register');
});

router.post('/register', (req, res, next) => {
  request.post({
      url: config.apiUrl + '/users',
      form: req.body
  }).pipe(res)
})


router.get('/login', (req, res, next) => {
    return res.render('login');
});

router.post('/login', (req, res, next) => {
  request.post({
    url: config.apiUrl + '/auth/login',
    form: req.body
  }).pipe(res)
});

router.get('/test', (req, res, next) => {
    return res.render('test');
});

router.get('/soundtrack', (req, res, next) => {
    return res.render('soundtrack');
});

module.exports = router;
