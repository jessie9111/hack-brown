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

/*=============================================
=            Playlist Routes
=============================================*/
router.get('/INTJ', (req, res, next) => {
    return res.render('INTJ');
});

router.get('/ESFJ', (req, res, next) => {
    return res.render('ESFJ');
});

router.get('/INTP', (req, res, next) => {
    return res.render('INTP');
});

router.get('/ENTP', (req, res, next) => {
    return res.render('ENTP');
});

router.get('/ENTJ', (req, res, next) => {
    return res.render('ENTJ');
});

router.get('/INFJ', (req, res, next) => {
    return res.render('INFJ');
});

router.get('/INFP', (req, res, next) => {
    return res.render('INFP');
});

router.get('/ENFJ', (req, res, next) => {
    return res.render('ENFJ');
});

router.get('/ENTP', (req, res, next) => {
    return res.render('ENTP');
});

router.get('/ENFP', (req, res, next) => {
    return res.render('ENFP');
});

router.get('/ISTJ', (req, res, next) => {
    return res.render('ISTJ');
});

router.get('/ISFJ', (req, res, next) => {
    return res.render('ISFJ');
});

router.get('/ESTJ', (req, res, next) => {
    return res.render('ESTJ');
});

router.get('/ISTP', (req, res, next) => {
    return res.render('ISTP');
});

router.get('/ISFP', (req, res, next) => {
    return res.render('ISFP');
});

router.get('/ESTP', (req, res, next) => {
    return res.render('ESTP');
});

router.get('/ESFP', (req, res, next) => {
    return res.render('ESFP');
});

module.exports = router;
