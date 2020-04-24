const Task = require('../models/Task');

exports.get = (req, res) => {
  Task.all().then((tasks) => {
    res.json({tasks: tasks});
  });
}

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task)
  .then((id) => {
    if(req.xhr || req.headers.accept.indexOf('json') > -1){
      Task.find(id)
      .then((task) => 
      res.json(task));
    } else {
      res.json({msg: 'Error al insertar'});
    }
  });
}

exports.done = (req, res) => {
  let task = {};
  task.id = req.body.id;

  Task.done(task)
  .then(() => {
    if(req.xhr || req.headers.accept.indexOf('json') > -1){
      res.json({status: "updated", id: task.id});
    } else {
      res.redirect('/');
    }
  });
}

exports.delete = (req, res) => {
  let dId = req.body.id;

  Task.delete(dId).then(() => {
    if(req.xhr || req.headers.accept.indexOf('json') > -1){
      res.json({status: "deleted", id: dId});
    } else {
      res.redirect('/');
    }
  });
}
