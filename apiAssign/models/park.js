const   mongoose            =require('mongoose');

let parkSchema=new mongoose.Schema({
    name:String,
    location:String,
    ranking:Number
});

module.exports=mongoose.model("Park",parkSchema);