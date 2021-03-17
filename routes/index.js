var express = require('express'),
    router = express.Router();

router.use('/students', require('./studentRouter'));

router.use('/subjects', require('./subjectRouter'));

router.use('/facultys', require('./facultyRouter'));

router.use('/class-rooms', require('./classRoomRouter'));

module.exports = router;