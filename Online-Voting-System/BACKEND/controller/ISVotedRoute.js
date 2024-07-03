const express=require("express");
const IsVotedSchema=require("../model/IsVotedSchema");
const ISVotedRoute=express.Router();
const mongoose=require("mongoose");

//To Read the Data
ISVotedRoute.get("/",(req,res)=>{
    IsVotedSchema.find((err,data)=>{
        if(err) return err;
        else res.json(data);
    })
})

ISVotedRoute.post("/AddIsvoted",(req,res)=>{
    IsVotedSchema.create(req.body,(err,data)=>{
        if(err) return err;
        else res.json(data);
    })
})

ISVotedRoute.delete("/delete-isvoted/:id",(req,res)=>{
    IsVotedSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

ISVotedRoute.get('/Isvoted-count', (req, res) => {
    IsVotedSchema.countDocuments({}, (err, count) => {
      if (err) {
        return res.status(500).json({ error: 'An error occurred while counting admin documents.' });
      }
      res.json({ count });
    });
  });


module.exports=ISVotedRoute;