var subjectModel = require('../model/subjectModel'),
    sbm = new subjectModel(),
    controllerUtils = require('../utils/controllerUtils/controllerUtils');

function subjectController (){
    cu = new controllerUtils();
}

subjectController.prototype.getAll = function(req, res, next){
    cu.getAll(sbm, req, res, next);
}

subjectController.prototype.getById = function(req, res, next){
    cu.getById(sbm, req, res, next);
}

subjectController.prototype.update = function(req, res, next){
    cu.update(sbm, req, res, next);
}

subjectController.prototype.create = function(req, res, next){
    cu.create(sbm, req, res, next);
}

subjectController.prototype.remove = function(req, res, next){
    cu.remove(sbm, req, res, next);
}

module.exports = subjectController;