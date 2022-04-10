const mongoose = require("mongoose");

const userPositionSchema = new mongoose.Schema({
          positionID:{ },
          positionName:{ }
});

module.exports = mongoose.models.UserPosition || mongoose.model('UserPosition', userPositionSchema);
