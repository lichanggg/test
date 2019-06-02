//定义上传商品字段
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
    title:{type:String,required:true},
    pic:String,
    price:String,
    fee:String,
    description:String,
    createAt:{type:Date,default:Date.now()},
    updateAt:{type:Date,default:new Date()}
});

//制定数据库中的存储集合
const product=mongoose.model("product",productSchema);
//暴露模块
module.exports = product;