const express = require('express')
const router = express.Router()

// router.use('/parent',require('./parent'))
// router.use('/child', require('./child'))
// router.use('/teacher', require('./teacher'))

router.get('/', (req, res) => {
    res.send('Hey! I guess this works then!')
})

module.exports = router