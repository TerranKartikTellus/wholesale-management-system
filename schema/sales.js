const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
          cartArray:{ },
          paymentVia:{ },
          orderId:{ },
          retailerId:{ },
          timestamp:{ },
          netCost:{ }
});

module.exports = mongoose.models.Sales || mongoose.model('Sales', salesSchema);
