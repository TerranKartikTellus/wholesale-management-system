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
                    
           },
          mrp:{ },
          orignalPrice:{ },
          rating:{ },
          quantity:{ },
          productCategoryId:{ 

           }
});
module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);




