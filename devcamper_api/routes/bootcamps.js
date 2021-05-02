const express = require('express');
const router = express.Router();

//Get all bootcamps
router.get('/', (req, res) => {
  res.status(200).send({
    success: true,
    msg: 'Show all bootcamps',
  });
});

//Get specific bootcamp by id
router.get('/:id', (req, res) => {
  res.status(200).send({ success: true, msg: `Show bootcamp ${req.params.id}` });
});

//Create new bootcamp by POST method
router.post('/', (req, res) => {
  res.status(200).send({ success: true, msg: 'Create new bootcamp' });
});

//Updating bootcamp by PUT method
router.put('/:id', (req, res) => {
  res.status(200).send({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

//Delete bootcamp by DELETE method
router.delete('/:id', (req, res) => {
  res.status(200).send({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

module.exports = router;
