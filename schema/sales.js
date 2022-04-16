const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
          cartArray:{ 
           },
          paymentVia:{ 
                 type: String, 
                 required: [true, 'Please mention the payment method used'],
                 unique: true,
                 maxlength: [15, 'Please make sure its less than 15 charecters']
          },
          orderId:{
                 type: Number, 
                 required: [true, 'Please add a Order Id'],
                 unique: true,
                 maxlength: [3, 'Order id should be of 3 digit']
           },
          retailerId:{ 
                 type: Number, 
                 required: [true, 'Please add a Retailer Id'],
                 unique: true,
                 maxlength: [3, 'Retailer id should be of 3 digit']
          },
          timestamp:{
                 type: Number, 
                 required: [true, 'Please the timstamp of transaction'],
                 unique: true,
                 maxlength: [6, 'Timestamp should be of 6 digit']
          },
          netCost:{  
                 type: Number, 
                 required: [true, 'Please add a Net cost'],
                 unique: true,
                 maxlength: [3, 'Product id should be of 3 digit']
          }
});

module.exports = mongoose.models.Sales || mongoose.model('Sales', salesSchema);
