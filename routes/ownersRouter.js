const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const ownerModel = require('../models/owner-model');

router.post("/create",(req,res)=>{
     let {fullname,email,password} = req.body;

    let ownercreated = ownerModel.create({
        fullname,
        email,
        password,
    });
        res.status(201).send(ownercreated);
});

router.get("/",(req,res)=>{
    res.send("han bhai chal rha hu");
})

module.exports = router;