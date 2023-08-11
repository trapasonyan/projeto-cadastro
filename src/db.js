const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conexão bem-sucedida com o MongoDB');
});
