var express = require('express'),
    router = express.Router(),
    classRoomController = require('../controller/classRoomController'),
    crc = new classRoomController();

router.get('/', crc.getAll.bind(crc));
router.get('/:id', crc.getById.bind(crc));
router.put('/:id', crc.update.bind(crc));
router.post('/', crc.create.bind(crc));
router.delete('/:id', crc.remove.bind(crc));

module.exports = router;