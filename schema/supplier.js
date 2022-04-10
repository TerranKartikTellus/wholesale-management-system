const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
          sid:{ },
          sname:{ },
          address:{ },
          contact:{ }
});

module.exports = mongoose.models.Supplier || mongoose.model('Supplier', supplierSchema);
