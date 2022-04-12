const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
          uid:{type: Number,
               required: [true, 'Please enter a valid ID'],
               unique: true,
               maxlength: [3, 'User ID should be of 3 digit']
            },
          uFname:{type: String,
                  required: [true, 'Please enter First Name'],
                  maxlength: 40,
           },
          uLname:{type: String,
                  required: [true, 'Please enter Last Name'],
                  maxlength: 40,

           },
          positionId:{type: Number,
                      required: [true, 'Please enter a valid ID'],
                      unique: true,
                      maxlength: [3, 'Position ID should be of 3 digit']

           },
          adminPrivilige:{type: Character,
                          maxlength: [1, 'Please enter Y/N'],
                          required: [true, 'Please enter admin privilege']
           },
          sex:{type: Character,
               maxlength: [1, 'Please enter m/f'],
               required: [true, 'Please enter sex']
           }
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
