module.exports = function(app){
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var ocorrencia = Schema({
    placa: {type: String, required: true},
    data: {type: Date, required: true},
    tipo: {type: Number, required: true},
    local: String,
    texto: {type: String, required: true}
  });

  var usuario = Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, index: {unique: true}},
    ocorrencias: [ocorrencia]
  });

  return mongoose.model('usuarios', usuario);
};
