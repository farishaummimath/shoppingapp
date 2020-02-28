const express = require('express')
const router = express.Router()

const categoriesController = require('../app/controllers/CategoriesController')//empty object by default
const productsController = require('../app/controllers/ProductsController')//empty object by default


// categories routes

router.get('/categories',categoriesController.list)
router.post('/categories',categoriesController.create)
router.get('/categories/:id',categoriesController.show)
router.put('/categories/:id',categoriesController.update)
router.delete('/categories/:id',categoriesController.destroy)

// products routes

router.get('/products',productsController.list)
router.post('/products',productsController.create)
router.get('/products/:id',productsController.show)
router.put('/products/:id',productsController.update)
router.delete('/products/:id',productsController.destroy)

module.exports = router