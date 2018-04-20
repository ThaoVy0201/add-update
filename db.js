const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean1901');

const SingerSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  image: { type: String, trim: true, required: true },
  link: { type: String, trim: true, required: true, unique: true },
});

const Singer = mongoose.model( 'Singer', SingerSchema );
module.exports = { Singer };
