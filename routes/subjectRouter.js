var express = require('express'),
    router = express.Router(),
    subjectController = require('../controller/subjectController'),   
    sbc = new subjectController();

router.get('/', sbc.getAll.bind(sbc));
router.get('/:id', sbc.getById.bind(sbc));
router.put('/:id', sbc.update.bind(sbc));
router.post('/', sbc.create.bind(sbc));
router.delete('/:id', sbc.remove.bind(sbc));

module.exports = router;