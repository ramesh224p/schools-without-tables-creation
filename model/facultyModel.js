var connection = require('../utils/mysql/mysql');

function facultyModel(){
    this.mysql = connection;
}

facultyModel.prototype.getAll = function (callback){
    this.mysql.query('SELECT * FROM facultys', function(err, result){
        callback(err, result);
    })
}

facultyModel.prototype.getById = function (id, callback){
    this.mysql.query('SELECT * FROM facultys WHERE id='+id, function(err, result){
        callback(err, result);
    })
}

facultyModel.prototype.update = function (id, data, callback){
    this.mysql.query('UPDATE facultys SET? WHERE id='+id, data, function(err, result){
        console.log(err, result)
        callback(err, result);
    })
}

facultyModel.prototype.create = function (data, callback){
    this.mysql.query('INSERT INTO facultys SET?', data, function(err, result){
        callback(err, result);
    })
}

facultyModel.prototype.remove = function (id, callback){
    this.mysql.query('DELETE FROM facultys WHERE id='+id, function(err, result){
        callback(err, result);
    })
}

module.exports = facultyModel;