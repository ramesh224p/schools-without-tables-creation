var express = require('express'),
    router = express.Router(),
    studentController = require('../controller/studentController'),   
    stc = new studentController();

router.get('/', stc.getAll.bind(stc));
router.get('/:id', stc.getById.bind(stc));
router.put('/:id', stc.update.bind(stc));
router.post('/', stc.create.bind(stc));
router.delete('/:id', stc.remove.bind(stc));

module.exports = router;