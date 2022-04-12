const mongoose = require("mongoose");

const userPositionSchema = new mongoose.Schema({
          positionID:{type: Number,
                      required: [true, 'Please enter a valid ID'],
                      unique: true,
                      maxlength: [3, 'Position ID should be of 3 digit']

           },
          positionName:{type: String,
                        required: [true, 'Please enter Position Name']
           }
});

module.exports = mongoose.models.UserPosition || mongoose.model('UserPosition', userPositionSchema);
