const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
          uid:{ },
          uFname:{ },
          uLname:{ },
          positionId:{ },
          adminPrivilige:{ },
          sex:{ }
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
