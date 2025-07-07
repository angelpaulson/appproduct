const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:artp1234@angelpaulson.ja6rsv3.mongodb.net/vimala2?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected!')
  })
  .catch((err) => console.log(err))