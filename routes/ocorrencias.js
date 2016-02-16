module.exports = function(app){
  var controllerOcorrencia = app.controllers.ocorrencia;
  app.get('/ocorrencias');
  app.get('/ocorrencias/:id');
  app.post('/ocorrencias');
  app.put('/ocorrencias/:id');
  app.delete('/ocorrencias/:id');
};
