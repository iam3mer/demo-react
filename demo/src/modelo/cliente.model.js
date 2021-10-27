const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClienteSchema = new Schema({
  nombre: {type: String, require: true},
  apellido: {type: String, require: true},
  saldo: {type: Number, require: true},
  empresa: {type: String, require: false}
})

module.exports = mongoose.model('Cliente', ClienteSchema);
