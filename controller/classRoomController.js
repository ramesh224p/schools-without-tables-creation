var classRoomModel = require('../model/classRoomModel'),
    crm = new classRoomModel(),
    controllerUtils = require('../utils/controllerUtils/controllerUtils');

function classRoomController (){
    console.log("controller");
    cu = new controllerUtils();
}

classRoomController.prototype.getAll = function(req, res, next){
    console.log("came")
    cu.getAll(crm, req, res, next);
}

classRoomController.prototype.getById = function(req, res, next){
    cu.getById(crm, req, res, next);
}

classRoomController.prototype.update = function(req, res, next){
    cu.update(crm, req, res, next);
}

classRoomController.prototype.create = function(req, res, next){
    cu.create(crm, req, res, next);
}

classRoomController.prototype.remove = function(req, res, next){
    cu.remove(crm, req, res, next);
}

module.exports = classRoomController;