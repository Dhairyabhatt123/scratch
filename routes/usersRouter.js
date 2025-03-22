const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("han bhai chal rha hu");
})

module.exports = router;