const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
          pCategoryId:{
            type: Number, 
            required: [true, 'Please add a product catgory Id'],
            unique: true,
            maxlength: [3, 'Id should be of 3 digit']
           },	
          pCategory:{
            type: String, 
            required: [true, 'Please mention category of the product'],
            unique: true,
            maxlength: [15, 'Please make sure its less than 15 charecters']
           }
});

module.exports = mongoose.models.ProductCategory || mongoose.model('productCategory', productCategorySchema);
