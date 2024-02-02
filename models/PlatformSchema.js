const mongoose = require('mongoose');

const PlatformSchema = new mongoose.Schema({
    name: {
        type : String
    },
    last: {
        type : Number,
        required: true
    },
    buy: {
        type : Number,
        required: true
    },
    sell: {
        type: Number,
        required:true
    }, 
    high: {
        type: Number,
        required:true
    }, 
    low: {
        type: Number,
        required:true
    }, 
    volume:{
        type: Number,
        required: true
    },
    base_unit: {
        type: String
    }
  });
  

module.exports = mongoose.model("Platform", PlatformSchema)