var express = require('express'),
    router = express.Router(),
    facultyController = require('../controller/facultyCOntroller'),   
    fc = new facultyController();

router.get('/', fc.getAll.bind(fc));
router.get('/:id', fc.getById.bind(fc));
router.put('/:id', fc.update.bind(fc));
router.post('/', fc.create.bind(fc));
router.delete('/:id', fc.remove.bind(fc));

module.exports = router;