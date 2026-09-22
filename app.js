const express = require('express');
const DatabaseSync = require('./src/config/sync');
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./src/config/swagger')

const productRoutes = require ('./src/routes/product.routes')
const app = express()
const PORT = 3000

  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(express.json()) 
app.use('/api/product', productRoutes)
app.get('/', (req, res) => {
    res.send('Server is running successfully')

    })

  async function startServer() {
    try{
      await DatabaseSync.sync()

         app.listen(PORT, () => {
       console.log(`Server runing at http://localhost:${PORT}`)  
})

    }catch (error) {
      console.log('Error starting the server:', error);
    }
 }

 startServer()
  