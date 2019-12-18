const express = require('express');
const router = express.Router();

//items model
const Item = require('../../models/Item');


//@route GET api/items
//@desc GET All Items
//@acess Public

router.get('/', (req, res) => {
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
})

//@route POST api/items
//@desc  create an item
//@acess Public


router.post('/', (req, res) => {
  const newItem = new Item({
      name: req.body.name
  });
  newItem.save().then(item => res.json(item));
});

//@route DELETE api/items/:id
//@desc  delete an item
//@acess Public


router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
  .then(item => item.remove().then(()=> res.json({success: true})))
  .catch(err => res.staus(404).json({success: failed}))
  })
 

module.exports = router;