const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Contact = require('../models/contact');

const db = 'mongodb://tarek:tarek@ds129946.mlab.com:29946/contact-list';
mongoose.Promise = global.Promise;

mongoose.connect(db, (err) => {
    if (err) {
        console.log('Error: ' + err);
    }
});

router.get('/contacts', (req, res) => {
    console.log('Get request for all contacts!')
    Contact.find({})
        .exec((err, contacts) => {
            if (err) {
                console.log('Error retreving contacts')
            } else {
                res.json(contacts);
            }
        })
    //res.send('api worksssss');
});


router.get('/contact/:id', (req, res) => {
    console.log('Get request for a single contact!')
    Contact.findById(req.params.id)
        .exec((err, contact) => {
            if (err) {
                console.log('Error retreving contact')
            } else {
                res.json(contact);
            }
        })
});

router.post('/contact', (req, res) => {
    console.log('Posting contact..');
    let newContact = new Contact();
    newContact.name = req.body.name;
    newContact.address = req.body.address;
    newContact.mobile = req.body.mobile;
    newContact.save((err, insertedContact) => {
        if (err) {
            console.log('Error saving contact');
        } else {
            res.json(insertedContact);
        }
    })

});

router.put('/contact/:id', (req, res) => {
    console.log('Updating contact');
    Contact.findByIdAndUpdate(req.params.id,
        {
            $set: { name: req.body.name, address: req.body.address, mobile: req.body.mobile }
        },
        { new: true },
        (err, updatedContact) => {
            if (err) {
                res.send('Error updating contact')
            } else {
                res.json(updatedContact)
            }
        }
    );
})

router.delete('/contact/:id', (req, res) => {
    console.log('Deleting a contact ...')
    Contact.findByIdAndRemove(req.params.id, (err, deletedContact) => {
        if(err){
            res.send('Error deleting contact');            
        }else{
            res.json(deletedContact)
        }
    })
    
})
module.exports = router;