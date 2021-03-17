var connection = require('../utils/mysql/mysql');

function classRoomModel(){
    console.log("model");
    this.mysql = connection;
}

classRoomModel.prototype.getAll = function (callback){
    this.mysql.query('SELECT * FROM classroom', function(err, result){
        callback(err, result);
    })
}

classRoomModel.prototype.getById = function (id, callback){
    this.mysql.query('SELECT sb.subject_name, st.name, f.faculty_name FROM classroom c, facultys f, students st, subjects sb WHERE  c.faculty = f.id AND c.student = st.id AND c.subject = sb.id AND c.id='+id, function(err, result){
        callback(err, result);
    })
}

classRoomModel.prototype.update = function (id, data, callback){
    this.mysql.query('UPDATE classroom SET? WHERE id='+id, data, function(err, result){
        callback(err, result);
    })
}

classRoomModel.prototype.create = function (data, callback){
    this.mysql.query('INSERT INTO classroom SET?', data, function(err, result){
        callback(err, result);
    })
}

classRoomModel.prototype.remove = function (id, callback){
    this.mysql.query('DELETE FROM classroom WHERE id='+id, function(err, result){
        callback(err, result);
    })
}

module.exports = classRoomModel;