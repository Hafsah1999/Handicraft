const { Schema,model } = require('../connection')

const productSchema = new Schema ({
    pname : String,
    pdetail : String,
    image: String,
    category:String,
});
module.exports = model('product', productSchema);
