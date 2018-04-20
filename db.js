const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean1901');

const SingerSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  image: { type: String, trim: true, required: true },
  link: { type: String, trim: true, required: true, unique: true },
});

const Singer = mongoose.model( 'Singer', SingerSchema );
module.exports = { Singer };

// create new doc
// const singer = new Singer({
//   name: 'Đức Phúc',
//   image: '1.png',
//   link: 'https://fb.com/ducphuc'
// });
// singer.save()
// .then(s => console.log(s))
// .catch(error => console.log(error.message));
// console.log(singer);

// Singer.insertMany([
//   {
//     name: 'Erik',
//     image: '2.png',
//     link: 'https://fb.com/erik'
//   },
//   {
//     name: 'Hòa Minzy',
//     image: '2.png',
//     link: 'https://fb.com/hoa-minzy'
//   }
// ])
// .then(s => console.log(s))
// .catch(error => console.log(error.message));

// Singer.find({ name: 'Đức Phúc'})
// .then(singers => console.log(singers))
// .catch(error => console.log(error));

// Singer.findOne({})
// .then(singers => console.log(singers))
// .catch(error => console.log(error));
// Singer.findById('5ad5ae4bbc0ce43228c0075c')
// .then(singers => console.log(singers))
// .catch(error => console.log(error));

// const singers = [
//  { name: 'OnlyC', link: 'https://mp3.zing.vn/nghe-si/OnlyC', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/0/4/049c33e0a33e9f9f1713799ed5c6601f_1511493750.jpg'},
//  { name: 'Ngọc Dolil', link: 'https://mp3.zing.vn/nghe-si/Ngoc-Dolil', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/b/b/bbbee024a18e075d34a14159585e0b53_1518238323.png'},
//  { name: 'Châu Khải Phong', link: 'https://mp3.zing.vn/nghe-si/Chau-Khai-Phong', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/0/6/06283b53569a11840f9c1975080193cf_1520424291.jpg'},
// ];