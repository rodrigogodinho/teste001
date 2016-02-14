module.exports = function(app){
  var Usuarios = app.models.usuario;
  var usuarioController = {
    create: function(req, res){
      new Usuarios(req.body.usuario).save( function(erro, usuario){
        if(erro){
          //res.send(erro);
          res.status(500).send(erro);
          console.log(erro);
        }else{
          res.status(201).send(usuario);
          console.log(usuario);
        }
      });
    },
    read: function(req, res){
      var id = req.params.id;
      if(id){
        Usuarios.findById(id, function(erro, usuario){
          if(erro){
            res.status(500).send(erro);
          }else{
            if(usuario){
              res.status(200).send(usuario);
            }else{
              res.status(404).json({'erro': 'Usuário não encontrado'});
            }

          }
        });
      }
    },
    list: function(req, res){
      Usuarios.find(function(erro, usuarios){
        if(erro){
          res.status(500).send(erro);
        }else{
          res.status(200).send(usuarios);
        }
      });
    },
    update: function(req, res){
      var id = req.params.id;
      if(id){
        Usuarios.findById(id, function(erro, usuario){
          if(erro){
            res.status(500).send(erro);
          }else{
            if(usuario){
              var newData = req.body.usuario;
              for(var attr in newData){
                if(newData[attr]){
                  usuario[attr] = newData[attr];
                }
              }
              usuario.save(function(erro, usuario){
                if(erro){
                  //res.send(erro);
                  res.status(500).send(erro);
                  console.log(erro);
                }else{
                  res.status(200).send(usuario);
                  console.log(usuario);
                }
              });
            }else{
              res.status(404).json({'erro': 'Usuário não encontrado'});
            }
          }
        });
      }
    },
    delete: function(req, res){
      var id = req.params.id;
      Usuarios.findById(id, function(erro, usuario){
        console.log(erro);
        console.log(usuario);
        if(erro){
          res.status(500).send(erro);
        }else{
          if(usuario){
            usuario.remove(function(erro){
              if(erro){
                res.status(500).send(erro);
              }else{
                res.status(200).send(usuario);
              }
            });
          }else{
            res.status(404).json({'erro': 'Usuário não encontrado'});
          }
        }
      });
    }
  };
  return usuarioController;
};
