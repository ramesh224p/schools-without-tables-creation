var connection = require('../utils/mysql/mysql');

function subjectModel(){
    this.mysql = connection;
}

subjectModel.prototype.getAll = function (callback){
    this.mysql.query('SELECT * FROM subjects', function(err, result){
        callback(err, result);
    })
}

subjectModel.prototype.getById = function (id, callback){
    this.mysql.query('SELECT * FROM subjects WHERE id='+id, function(err, result){
        callback(err, result);
    })
}

subjectModel.prototype.update = function (id, data, callback){
    this.mysql.query('UPDATE subjects SET? WHERE id='+id, data, function(err, result){
        callback(err, result);
    })
}

subjectModel.prototype.create = function (data, callback){
    this.mysql.query('INSERT INTO subjects SET?', data, function(err, result){
        
        callback(err, result);
    })
}

subjectModel.prototype.remove = function (id, callback){
    this.mysql.query('DELETE FROM subjects WHERE id='+id, function(err, result){
        callback(err, result);
    })
}

module.exports = subjectModel;