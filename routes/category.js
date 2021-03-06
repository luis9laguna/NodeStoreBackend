//REQUIRED
const { Router } = require('express');
const { check } = require('express-validator');

//FUNCTIONS
const { checkParams } = require('../middlewares/check-params');
const { getCategory, getProductByCategory, createCategory, updateCategory, 
        deleteCategory } = require('../controllers/category');
const { checkJWT, checkAdmin } = require('../middlewares/check-jwt');

//CODE
const router = Router();

//GET
router.get('/', getCategory);

//GET PRODUCT BY CATEGORY
router.get('/:id', getProductByCategory);

//POST
router.post('/',
    [ checkJWT,
        checkAdmin, 
        check('name', 'Name is required').not().isEmpty(),
        checkParams
    ], 
    createCategory);

//PUT
router.put('/:id',
    [ checkJWT,checkAdmin ], 
    updateCategory);

//DELETE
router.delete('/:id', [checkJWT, checkAdmin], deleteCategory);



module.exports = router;