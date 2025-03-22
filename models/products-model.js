const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    image :{
        type:String,
        required : true
    },
    name :{
        type:String,
        required : true
    },
    discount :{
        type: Number,
        default:0,
    },
    price:{
        type: Number
    },
    bgcolor :{
        type:String,
    },
    panelcolor :{
        type:String,
    },
    textcolor :{
        type:String,
    },
})

module.exports = mongoose.model("post",postSchema);