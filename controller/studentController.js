var studentModel = require('../model/studentModel'),
    stm = new studentModel(),
    controllerUtils = require('../utils/controllerUtils/controllerUtils');

function studentController (){
    cu = new controllerUtils();
}

studentController.prototype.getAll = function(req, res, next){
    cu.getAll(stm, req, res, next);
}

studentController.prototype.getById = function(req, res, next){
    cu.getById(stm, req, res, next);
}

studentController.prototype.update = function(req, res, next){
    cu.update(stm, req, res, next);
}

studentController.prototype.create = function(req, res, next){
    cu.create(stm, req, res, next);
}

studentController.prototype.remove = function(req, res, next){
    cu.remove(stm, req, res, next);
}

module.exports = studentController;