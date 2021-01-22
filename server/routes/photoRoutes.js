var express = require('express');
var router = express.Router();
var photoController = require('../controllers/photoController.js');

var multer = require('multer');
var upload = multer({ dest: 'public/images/' });

function requiresLogin(req, res, next) {
    console.log("auth!");
    if (req.session && req.session.userId) {
        return next();
    } else {
        var err = new Error('You must be logged in to view this page.');
        err.status = 401;
        return next(err);
    }
}

/*
 * GET
 */
router.get('/', photoController.list);
router.get('/dodaj', requiresLogin, photoController.dodaj);
router.get('/hot', photoController.listhot);

/*
 * GET
 */
router.get('/:id', photoController.show);

/*
 * POST
 */
router.post('/', requiresLogin, upload.single('slika'), photoController.create);

/*
 * PUT
 */
router.put('/:id', requiresLogin, upload.single('slika'), photoController.update);

/*
 * DELETE
 */
router.delete('/:id', photoController.remove);

module.exports = router;
