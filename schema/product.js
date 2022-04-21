const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
          pid:{ 
                    type: Number, 
                    required: [true, 'Please add a ProductId'],
                    unique: true,
                    maxlength: [3, 'Product ID should be of 3 digit']
          },
          pname:{ 
            type: String, 
            required: [true, 'Please mention the Product name'],
            unique: true,
            maxlength: [15, 'Please make sure its less than 15 charecters']
                    
           },
          mrp:{ 
            type: Number, 
            required: [true, 'Please mention the MRP of the product'],
            unique: true,
            maxlength: [10, 'Decrease the the Zeros!']
          },
          orignalPrice:{
            type: Number, 
            required: [true, 'Please add the Original price'],
            unique: true,
            maxlength: [10, 'Price should be of 10 digit']
           },
          rating:{
            type: Number, 
            required: [true, 'Please add a Rating'],
            unique: true,
            maxlength: [2, 'Retailer id should be of 2 digits upto 10']
           },
          quantity:{ 
            type: Number, 
            required: [true, 'Please The quantity of product'],
            unique: true,
            maxlength: [3, 'Quantity should be of 3 digit']},
          pCategoryId:{ 
            type: Number, 
            required: [true, 'Please add a Product category id Id'],
            unique: true,
            maxlength: [3, 'The id should be of 3 digit']

           }
});
module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);




