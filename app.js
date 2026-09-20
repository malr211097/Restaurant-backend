const express = require('express');
const DatabaseSync = require('./src/config/sync');
const app = express()
const PORT = 3000

app.use(express.json()) 

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
  