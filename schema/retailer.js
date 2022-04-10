const mongoose = require("mongoose");

const retailerSchema = new mongoose.Schema({
          rid:{ },
          rname:{ },
          address:{ },
          contact:{ }
});

module.exports = mongoose.models.Retailer || mongoose.model('Retailer', retailerSchema);
