module.exports = function(app){
  /* GET users listing. */
  var controllerUsuario = app.controllers.usuario;
  app.get('/users', function(req, res, next) {
    res.send('Tome-le get');
  });

  app.get('/user/:id', function(req, res, next) {
    res.send('Tome-le get - id: ' + req.params.id);
  });

  app.post('/user', controllerUsuario.create);

  app.put('/user/:id',function(req, res, next){
    res.send('Tome-le put do id: ' + req.params.id);
  });

  app.delete('/user/:id', function(req, res, next){
    res.send('Deleta o id: ' + req.params.id);
  });

};
