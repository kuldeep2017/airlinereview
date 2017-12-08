
const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose


// Validate Function to check review comment length
let commentLengthChecker = (comment) => {
  // Check if comment exists
  if (!comment[0]) {
    return false; // Return error
  } else {
    // Check comment length
    if (comment[0].length < 1 || comment[0].length > 200) {
      return false; // Return error if comment length requirement is not met
    } else {
      return true; // Return comment as valid
    }
  }
};

// Array of Comment validators
const commentValidators = [
  // First comment validator
  {
    validator: commentLengthChecker,
    message: 'Review comments may not exceed 200 characters.'
  }
];

// Airline Model Definition

const airlineSchema = new Schema({
    AirlineName: { type: String, required: true},
    AirlineDesc: { type: String, required: true },
    Founded: String,
    Hubs:String,
    TotalDestinations: Number,
    Rating: Number,
    reviews: [{
        comment: { type: String, validate: commentValidators },
        reviewer: { type: String },
        rating: Number,
        likes: { type: Number, default: 0 },
        likedBy: { type: Array },
        reviewed_at: { type: Date, default: Date.now() },
    }],
    updated_at: { type: Date, default: Date.now() },
});

// Export Module/Schema
module.exports = mongoose.model('Airline', airlineSchema);
