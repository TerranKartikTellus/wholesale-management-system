const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
          sid:{ 
            type: Number, 
            required: [true, 'Please add a verified supplier Id'],
            unique: true,
            maxlength: [10, ' Supplier id should be of 10 digit']
          },
          sname:{ 
            type: CharacterData, 
            required: [true, 'Please enter the registered name of the supplier'],
            unique: true,
            maxlength: [10, 'Please make sure its less than 10 charecters']
          },
          address:{
            type: CharacterData, 
            required: [true, 'Please enter the registered address of the supplier'],
            unique: true,
            maxlength: [30, 'Please make sure its less than 30 charecters']
           },
          contact:{
            type: CharacterData, 
            required: [true, 'Please add ue email id for contact purposes'],
            unique: true,
            maxlength: [15, 'Please make sure its less than 15 charecters'] 
           }
});

module.exports = mongoose.models.Supplier || mongoose.model('Supplier', supplierSchema);
