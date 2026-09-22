const ProductService = require('../services/product.service')

class ProductController {

    static async getAllProducts(req, res){
        try{
           const products = await ProductService.getAllProducts()
            return res.status(200).json({
                mesagge: 'Products retrieved successfully',
                data: products 
            })
        }catch(error){
            return res.status(500).json({
                mesagge: error.mesagge
            })
        }
    }

    static async getProductById(req, res){
        try{
            const { id } = req.params
            const product = await ProductService.getProductById(id)
            return res.status(200).json({
                mesagge: 'Product retireved succesfully',
                data: product
            })
        }catch(error){
            return res.status(500).json({
                mesagge: error.mesagge
            })

        }
    }
    static async createProduct(req, res){
        try{
           const productData = req.body
           const product = await ProductService.createProduct(productData)
           return res.status(200).json({
            mesagge: 'Product created successfully',
            data: product
           })
        }catch(error){
           return res.status(500).json({
            mesagge: error.mesagge
           })
        }
    }

    static async updateProduct(req, res){
        try{
            const { id } = req.params
            const productData = req.body

            const product = ProductService.updateProduct(id, productData)

            return resstatus(200).json({
                mesagge: 'Product update successfully',
                data: product
            })

        }catch(error){
            return res.status(500).json({
                mesagge: mesagge
            })
        }
    }

    static async deleteProduct(req, res){
        try {

            const { id } = req.params   
            const product = await ProductService.deleteProduct(id)

            return res.status(200).json({
                mesagge: 'Product deleted successfully',
                data: product 
             })

        }catch(error){
            return res.status(500).json({
                mesagge: error.mesagge
            })
          }
        }
    }

    module.exports = ProductController
