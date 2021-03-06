const express = require('express');
const reload = require('reload');
const parser = require('body-parser').urlencoded({ extended: false });

const { upload } = require('./uploadConfig');
const { Singer } = require('./db');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  Singer.find({})
  .then(singers => res.render('index', { singers }))
  .catch(error => res.render(error));
});

app.get('/remove/:id', (req, res) => {
  // Singer.findByIdAndRemove(id)
  // Singer.findOneAndRemove({})
  // Singer.remove()
  const { id } = req.params;
  Singer.findByIdAndRemove(id)
  .then(() => res.redirect('/'))
  .catch(error => res.send(error));
});

app.post('/update/:id', parser, ( req, res ) => {
  const { id } = req.params;
  const { name, link, image } = req.body;
  // Singer.findByIdAndUpdate()
  // Singer.findOneAndUpdate()
  // Singer.updateMany()
  Singer.findByIdAndUpdate( id, { name, link, image })
  .then(() => res.redirect('/'))
  .catch(error => res.send(error));
});

app.get('/update/:id', (req, res) => {
  const { id } = req.params;
  Singer.findById(id)
  .then( singer => res.render('update', { singer }))
  .catch( error => res.send(error));
});

app.post('/add', upload.single('image'), ( req, res ) => {
  const { name, link } = req.body;
  const image = req.file ? req.file.filename: 'default.png';
  const singer = new Singer({ name, link, image });
  singer.save()
  .then(() => res.redirect('/'))
  .catch(error => res.send(error));
});


app.listen(4000, () => console.log('server started!'));
reload(app);