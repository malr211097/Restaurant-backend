const sequelize = require('../config/database')
const User = require('./user.model')
const Product = require('./product.model')
const Sale = require('./sale.model')
const saleProduct = require('./saleProduct.model')

User.hasMany(Sale,{
    foreignKey: 'userId',
    as: 'sales',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

Sale.belongsTo(User,{
    foreignKey: 'userId',
    as: 'user',
})

Sale.hasMany(saleProduct,{
    foreignKey: 'saleId',
    as: 'saleProducts',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

SaleProduct.belongsTo(Sale,{
    foreignKey: 'saleId',
    as: 'sale',
})

Product.hasMany(saleProduct,{
    foreignKey: 'productId',
    as: 'saleProducts',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

SaleProduct.belongsTo(Product,{
    foreignKey: 'productId',
    as: 'product',
}) 

module.exports = {
   sequelize,
   User,
   Product,
    Sale,
    ProductSale
 }
