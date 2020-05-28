const   Park            =require('./../models/park');

//  CRUD -> create, retrieve, update, delete
let parkController={
    create: (req,res) => {
        Park.create({
            name:req.body.name,
            location:req.body.location,
            ranking:req.body.ranking
        })
        .then(result => {
            res.json({sucess:true, result:result});
        })
        .catch(err => {
            res.json({sucess:false, result:err});
        });
    },

    retrieve: (req,res) => {
        Park.find()
        .then( park => {
            if(!park){
                res.json({sucess:false, result: "No parks found!"});
            }
            else{
                res.json({sucess:true, result: park});
            }
        })
        .catch( err => {
            res.json({sucess:false, result:err});
        });
    },

    update: (req,res) => {
        // console.log(req.body._id);
        // console.log(typeof req.body._id);
        Park.update({_id:req.body._id},req.body)
        .then(park => {
            if(!park)   res.json({sucess:false, result: "No such park found!"});
            else        res.json({sucess:true, result: park});
        })
        .catch(err => {
            res.json({sucess:false, result: err});
        })
    },

    delete: (req,res) => {
        Park.findByIdAndDelete(req.body._id, req.body)
        .then(park => {
            if(!park)   res.json({sucess:false, result: "No such park found!"});
            else        res.json({sucess:true, result:park});
        })
        .catch(err => {
            res.json({sucess:false, result:err});
        })
    }

};

module.exports=parkController;