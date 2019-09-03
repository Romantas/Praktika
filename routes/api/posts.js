const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//Item model
const Item = require('../../models/post');

// GET api/posts

router.get('/', auth, (req, res) => {
   Item.find()
       .then(items => res.json(items));
});

// POST api/posts

router.post('/', auth('company'), (req, res) => {
    const newItem = new Item({
        company_id: req.body.company_id,
        student_id: req.body.student_id,
        jp: req.body.jp,
        title: req.body.title,
        body: req.body.body
    });

    newItem.save()
        .then(item => res.json(item));
});

// DELETE api/posts

router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then( () => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;
