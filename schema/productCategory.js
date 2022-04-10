const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
          pCategoryId:{ },	
          pCategory:{ }
});

module.exports = mongoose.models.ProductCategory || mongoose.model('productCategory', productCategorySchema);
