module.exports = function(app){
  var controllerUsuario = app.controllers.usuario;
  app.get('/usuarios', controllerUsuario.list);
  app.get('/usuarios/:id', controllerUsuario.read);
  app.post('/usuarios', controllerUsuario.create);
  app.put('/usuarios/:id', controllerUsuario.update);
  app.delete('/usuarios/:id', controllerUsuario.delete);

};
