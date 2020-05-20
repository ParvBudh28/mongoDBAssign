// the data used in the database is of users
// aim-> to perform CRUD operations
let mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/mongo_assign');

let userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    state:String,
    country:String
});

let User=mongoose.model('User',userSchema);

// inserting in the db
User.create({
    name:"user2",
    age:27,
    state:"California",
    country:"U.S."
},function (err,user) {
    if(err){
        console.log(err);
    }
    else{
        console.log("added user: ");
        console.log(user);
    }
});

// // using the find method to read data
User.find({},function (err,allUsers) {
    if(err){
        console.log(err);
    }
    else{
        console.log(allUsers);
    }
});

// to get a particular record using some information available beforehand like name of the user
User.find({name:'user1'},function (err,user) {
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
});

// findById method
if(mongoose.Types.ObjectId.isValid(userId.id)){
    User.findById(userId.id,function (err,user) {
        if(err){
            console.log(err);
        }
        else{
            if(user){
                console.log(user);
            }
            else{
                console.log("no data found !");
            }
        }
    });
}
else{
    console.log("provide correct user id");
}

// findOne method
if(mongoose.Types.ObjectId.isValid(userId.id)){
    User.findOne({_id:userId.id},function (err,user) {
        if(err){
            console.log(err);
        }
        else{
            if(user){
                console.log(user);
            }
            else{
                console.log("no data found !");
            }
        }
    });
}
else{
    console.log("provide correct user id");
}

// save method
let newUser=new User({
    name:'user4',
    age:23,
    state:'New york City',
    country:'U.S.'
});

newUser.save(function (err,user){
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
});

// insertMany methods
User.insertMany([newUser],function (err,data) {
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

if (mongoose.Types.ObjectId.isValid('5ec4e2b6f525a7f0fbc67909')){
    User.remove({ _id: '5ec4e2b6f525a7f0fbc67909'},function (err,data) {
        if(err){
            console.log(err);
        }
        else{
            if(data){
                console.log("removed ");
                console.log(data);
            }
            else{
                console.log("no such user exists");
            }
        }
    });
}
else{
    console.log("enter a valid id");
}

// upadting methods
User.update({name:"user2"},{$set:{name:"user22", state:"london", country:"U.K."}},function (err,data) {
    if(err){
        console.log(err);
    }
    else{
        console.log("updated: ");
        console.log(data);
    }
});

// similar methods findOneAndUpdate, findOneAndRemove, findByIdAndUpdate, findByIdAndRemove
// User.findOneAndRemove
// User.findOneAndUpdate
// User.findByIdAndRemove
// User.findByIdAndUpdate
