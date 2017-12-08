const Airline = require('../models/airline'); // Import Airline Model Schema
const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/database'); // Import database configuration
const _ = require("lodash");
const express = require('express');
const router = express.Router();

/* GET ALL AIRLINES */
router.get('/', function(req, res, next) {
  Airline.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE AIRLINE BY ID */
router.get('/:id', function(req, res, next) {
  Airline.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE AIRLINE */
router.post('/', function(req, res, next) {
  Airline.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE AIRLINE */
router.put('/:id', function(req, res, next) {
  Airline.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE AIRLINE */
router.delete('/:id', function(req, res, next) {
  Airline.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* ADD REVIEW */
router.post('/review', function(req, res, next) {  

  Airline.findOne({ _id: req.body.id }, (err, airline) => {
      // Check if error was found
          if (err) {
            res.json({ success: false, message: 'Invalid airline id' }); // Return error message
          } else {
            // Check if id matched the id of any blog post in the database
            if (!airline) {
              res.json({ success: false, message: 'airline not found.' }); // Return error message
            } else {       
                  airline.reviews.push({
                      comment: req.body.comment, // Comment field
                      rating: req.body.rating, // rating field
                      reviewer: req.body.reviewer // Person who reviewed
                  });
                  airline.Rating = _.round(_.meanBy(airline.reviews, 'rating'));
                  // Save blog post
                  airline.save((err) => {
                      // Check if error was found
                      if (err) {
                      res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                      } else {
                     
                      res.json({ success: true, message: 'Review saved' }); // Return success message
                      }
                  });
            }
          }     
            
      });

 /*     Airline.aggregate([    
        {$match : {"_id" :req.body.id}},                      
         {$unwind: '$reviews'}, 
         {$group: {
             _id: null, 
             "Rating": {$avg: "$reviews.rating" }
         }}
     ],(err,res)=>{
      if (err) {
        console.log(err);
        } else {
       
          console.log(res);
        }
     
    });*/
  }); 
  

module.exports = router;

