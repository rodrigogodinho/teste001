module.exports = function(app){
  var Usuarios = app.models.usuario;
  var usuarioController = {
    create: function(req, res){

      new Usuarios(req.body.usuario).save( function(erro, usuario){
        if(erro){
          res.send(erro);
          res.status(500);
          return console.log(erro);
        }
        res.send(usuario);
        res.status(201);
        console.log(usuario);
      });
    },
    read: function(req, res){

    },
    update: function(req, res){

    },
    delete: function(req, req){

    }
  };
  return usuarioController;
};
