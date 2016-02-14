module.exports = function(app){
  /* GET users listing. */
  var controllerUsuario = app.controllers.usuario;
  app.get('/users', controllerUsuario.list);

  app.get('/users/:id', controllerUsuario.read);

  app.post('/users', controllerUsuario.create);

  app.put('/users/:id', controllerUsuario.update);

  app.delete('/users/:id', controllerUsuario.delete);

};
