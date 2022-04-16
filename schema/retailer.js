const mongoose = require("mongoose");

const retailerSchema = new mongoose.Schema({
          rid:{ 
            type: Number, 
            required: [true, 'Please add a Retailer Id'],
            unique: true,
            maxlength: [3, 'Retailer id should be of 3 digit']
           },
          rname:{
            type: String, 
            required: [true, 'Please mention the retailer name'],
            unique: true,
            maxlength: [15, 'Please make sure its less than 15 charecters']
           },
          address:{
            type: String, 
            required: [true, 'Please mention the retailer address'],
            unique: true,
            maxlength: [15, 'Please make sure its less than 15 charecters']
           },
          contact:{
            type: Number, 
            required: [true, 'Please add a contact number'],
            unique: true,
            maxlength: [10, 'Contact no should be of 10 digit']
           }
});

module.exports = mongoose.models.Retailer || mongoose.model('Retailer', retailerSchema);
