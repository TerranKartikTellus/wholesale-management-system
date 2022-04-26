const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
          sid:{ 
            type: Number, 
            required: [true, 'Please add a verified supplier Id'],
            unique: true,
            maxlength: [3, ' Supplier id should be of 3 digit']
          },
          sname:{ 
            type: String, 
            required: [true, 'Please enter the registered name of the supplier'],
            unique: true,
            maxlength: [10, 'Please make sure its less than 10 charecters']
          },
          saddress:{
            type: String, 
            required: [true, 'Please enter the registered address of the supplier'],
            unique: true,
            maxlength: [30, 'Please make sure its less than 30 charecters']
           },
          scontact:{
            type: String, 
            required: [true, 'Please add ue email id for contact purposes'],
            unique: true,
            maxlength: [15, 'Please make sure its less than 15 charecters'] 
           }
});

module.exports = mongoose.models.Supplier || mongoose.model('Supplier', supplierSchema);
