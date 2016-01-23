(function() {

  'use strict';
  var express = require('express');
  var router = express.Router();
  var mongojs = require('mongojs');
  var passport = require('passport');
  var db = mongojs('dare', ['dares']);

  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index');
  });

  router.get('/login', function(req, res) {
    res.render('login');
  });

  router.post('/login',
    passport.authenticate('local'),
    function(req, res) {
      // If this function gets called, authentication was successful.
      // `req.user` contains the authenticated user.
      res.redirect('/users/' + req.user.username);
  });

  router.get('/api/dares', function(req, res) {
    db.dares.find(function(err, data) {
      res.json(data);
    });
  });

  router.post('/api/dares', function(req, res) {
    db.dares.insert(req.body, function(err, data) {
      res.json(data);
    });

  });

  router.put('/api/dares', function(req, res) {

    db.dares.update({
      _id: mongojs.ObjectId(req.body._id)
    }, {
      isCompleted: req.body.isCompleted,
      dares: req.body.dares
    }, {}, function(err, data) {
      res.json(data);
    });

  });

  router.delete('/api/dares/:_id', function(req, res) {
    db.dares.remove({
      _id: mongojs.ObjectId(req.params._id)
    }, '', function(err, data) {
      res.json(data);
    });

  });

  module.exports = router;

}());
