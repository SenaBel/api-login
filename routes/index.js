const router = require("express").Router();

router.use('/v1/api', require('./api/v1/'));
router.get('/', (req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.send({ ok: true });

})

// router.use(function(err, req, res, next) {
//     if(err.name === 'ValidationError'){
//         return res.status(422).json({
//             errors: Object.keys(err.errors).reduce(function(errors, key) {
//                 errors[key] = err.errors[key.message]
//                 return errors
//             }, {})
//         })
//     }
//     return next(err)
// })

module.exports = router;