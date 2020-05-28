const   express             =require('express'),
        mongoose            =require('mongoose'),
        app                 =express(),
        ParkController      =require('./controllers/ParkController'),
        Park                =require('./models/park');
        bodyParser          =require('body-parser');

mongoose.connect('mongodb://localhost/api_assign',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(bodyParser.json());
// app.use(express.json());

// code to test the Park model 
// Park.create({
//     name:"number one",
//     location: "India",
//     ranking: 10
// })
// .then(result => {
//     console.log(result);
// })

// create route
app.post('/api/park', ParkController.create);

// retrieve route
app.get('/api/park', ParkController.retrieve);

// update route
app.put('/api/park', ParkController.update);

// delete route
app.delete('/api/park', ParkController.delete);


app.listen(3000, ()=>{
    console.log("started server on port 3000");
});