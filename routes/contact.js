// 1 require express
const express = require ("express");
const Contact = require("../models/Contact");

// route
const router = express.Router();

/// Routes
// test route
router.get("/test", (req, res)=> {
    res.send("Hello world");
});

// add contact
router.post("/add", async (req, res) => {
    try {
        const { name, email, phone} = req.body;
        const newContact = new Contact({name, email, phone});
        await newContact.save();
        res.status (200).send({msg : "Contact add successfully...", newContact});
    } catch (error) {
        res.status(400).send({msg : "Can not add Contact !!!", error});
    }
});

// get all contact
router.get("/all", async (req, res) => {
    try {
        const listContacts = await Contact.find();
        res.status(200).send({msg:"This is the list of all contacts ...", listContacts});
    } catch (error) {
        res.status(400).send ({ msg:"Can not get !!!", error});
        
    }
});

// get one contact
router.get("/:id", async (req, res)=> {
    try {
        const contactToGet = await Contact.findOne ({ _id: req.params.id});
        res.status(200).send({ msg: " I get the contact ...", contactToGet});
    } catch (error) {
        res
        .status(400)
        .send ({msg : "Can not get contact with this id !!!", error});
        
    }
});

// delete contact
router.delete("/:_id", async (req, res)=> {
    try {
        const {_id} = req.params;
        await Contact.findOneAndDelete ({ _id});
        res.status(200).send({msg: "Contact deleted ..."});
    } catch (error) {
        res
        .status(400)
        .send ({ msg: "Can not delete contact with this id !!!", error});
        
    }
});

// edit contact
router.put ("/:id", async (req, res) => {
    try {
        const {_id} = req.params;
        const result = await Contact.updateOne({_id}, { $set: {...req.body}});
        res.status(200).send({msg: "Contact updated..."});
        
    } catch (error) {
        res
        .status(400)
        .send({msg: "Can not update contact with this id !!!", error});
        
    }
   
});

// export
module.exports = router;