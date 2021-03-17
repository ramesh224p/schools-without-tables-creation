var facultyModel = require('../model/facultyModel'),
    fcm = new facultyModel(),
    controllerUtils = require('../utils/controllerUtils/controllerUtils');

function facultyController (){
    cu = new controllerUtils();
}

facultyController.prototype.getAll = function(req, res, next){
    cu.getAll(fcm, req, res, next);
}

facultyController.prototype.getById = function(req, res, next){
    cu.getById(fcm, req, res, next);
}

facultyController.prototype.update = function(req, res, next){
    cu.update(fcm, req, res, next)
}

facultyController.prototype.create = function(req, res, next){
    cu.create(fcm, req, res, next);
}

facultyController.prototype.remove = function(req, res, next){
    cu.remove(fcm, req, res, next);
}

module.exports = facultyController;