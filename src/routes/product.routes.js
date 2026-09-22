const express = require('express')
const ProductController = require('../controllers/product.controllers')

const router = express.Router()
//localhost:3000/api/product

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: API para administrar productos del restaurante
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *       properties:
 *         productId:
 *           type: integer
 *           readOnly: true
 *           example: 1
 *         name:
 *           type: string
 *           minLength: 10
 *           maxLength: 100
 *           example: Bandeja paisa tradicional
 *         description:
 *           type: string
 *           maxLength: 255
 *           nullable: true
 *           example: Frijoles, arroz, carne molida, chicharrón, huevo, aguacate y arepa.
 *         price:
 *           type: number
 *           format: double
 *           minimum: 1000
 *           example: 28000.00
 */

/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Productos obtenidos correctamente
 *         content:
 *           application/json:
 *             example:
 *               message: Products retrieved successfully
 *               data:
 *                 - productId: 1
 *                   name: Bandeja paisa tradicional
 *                   description: Frijoles, arroz, carne molida, chicharrón, huevo, aguacate y arepa.
 *                   price: 28000.00
 */
router.get('/', ProductController.getAllProducts)

/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     summary: Obtener un producto por su identificador
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identificador del producto
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Producto obtenido correctamente
 *         content:
 *           application/json:
 *             example:
 *               message: Product retrieved successfully
 *               data:
 *                 productId: 1
 *                 name: Ajiaco santafereño
 *                 description: Sopa bogotana con pollo, papa criolla, mazorca y guascas.
 *                 price: 24000.00
 */
router.get('/:id', ProductController.getProductById)

/**
 * @swagger
 * /api/product:
 *   post:
 *     summary: Crear un producto
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *           example:
 *             name: Arepa con queso costeño
 *             description: Arepa artesanal con queso costeño derretido.
 *             price: 9500.00
 *     responses:
 *       200:
 *         description: Producto creado correctamente
 *         content:
 *           application/json:
 *             example:
 *               message: Product created successfully
 *               data:
 *                 productId: 2
 *                 name: Arepa con queso costeño
 *                 description: Arepa artesanal con queso costeño derretido.
 *                 price: 9500.00
 */
router.post('/',ProductController.createProduct)

/**
 * @swagger
 * /api/product/{id}:
 *   put:
 *     summary: Actualizar un producto
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identificador del producto
 *         schema:
 *           type: integer
 *           example: 2
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *           example:
 *             name: Arepa con queso y chorizo
 *             description: Arepa artesanal con queso costeño y chorizo santarrosano.
 *             price: 12500.00
 *     responses:
 *       200:
 *         description: Producto actualizado correctamente
 *         content:
 *           application/json:
 *             example:
 *               message: Product updated successfully
 *               data:
 *                 productId: 2
 *                 name: Arepa con queso y chorizo
 *                 description: Arepa artesanal con queso costeño y chorizo santarrosano.
 *                 price: 12500.00
 */
router.put('/:id', ProductController.updateProduct)

/**
 * @swagger
 * /api/product/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identificador del producto
 *         schema:
 *           type: integer
 *           example: 2
 *     responses:
 *       200:
 *         description: Producto eliminado correctamente
 *         content:
 *           application/json:
 *             example:
 *               message: Product deleted successfully
 *               data:
 *                 productId: 2
 *                 name: Arepa con queso y chorizo
 */
router.delete('/:id', ProductController.deleteProduct)

module.exports = router