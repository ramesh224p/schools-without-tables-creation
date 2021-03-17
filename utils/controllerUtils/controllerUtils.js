function controllerUtlis(){

}

controllerUtlis.prototype.getAll = function(commanModel, req, res, next){
    commanModel.getAll(function(err, data){
        if(err){
            res.status(201).send({status: false, data: []});
        }else {
            res.status(200).send({status:true, data: data})
        }
    })
}

controllerUtlis.prototype.getById = function(commanModel, req, res, next){
    commanModel.getById(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status: false, data: []});
        }else {
            res.status(200).send({status:true, data: data})
        }
    })
}

controllerUtlis.prototype.create = function(commanModel, req, res, next){
    commanModel.create(req.body, function(err, data){
        if(err){
            res.status(201).send({status: false, data: [], error: err});
        }else {
            res.status(200).send({status:true, data: data})
        }
    })
}

controllerUtlis.prototype.update = function(commanModel, req, res, next){
    commanModel.update(req.params.id, req.body, function(err, data){
        if(err){
            res.status(201).send({status: false, data: []});
        }else {
            res.status(200).send({status:true, message : "update sucessfully"})
        }
    })
}

controllerUtlis.prototype.remove = function(commanModel, req, res, next){
    commanModel.remove(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status: false, data: []});
        }else {
            res.status(200).send({status:true, data: data})
        }
    })
}

module.exports = controllerUtlis;


