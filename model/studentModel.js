var connection = require('../utils/mysql/mysql');

function studentModel(){
    this.mysql = connection;
}

studentModel.prototype.getAll = function (callback){
    this.mysql.query('SELECT * FROM students', function(err, result){
        callback(err, result);
    })
}

studentModel.prototype.getById = function (id, callback){
    this.mysql.query('SELECT * FROM students WHERE id='+id, function(err, result){
        callback(err, result);
    })
}

studentModel.prototype.update = function (id, data, callback){
    this.mysql.query('UPDATE students SET? WHERE id='+id, data, function(err, result){
        callback(err, result);
    })
}

studentModel.prototype.create = function (data, callback){
    this.mysql.query('INSERT INTO students SET?', data, function(err, result){
        callback(err, result);
    })
}

studentModel.prototype.remove = function (id, callback){
    this.mysql.query('DELETE FROM students WHERE id='+id, function(err, result){
        callback(err, result);
    })
}

module.exports = studentModel;