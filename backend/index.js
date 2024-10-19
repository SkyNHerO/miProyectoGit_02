const express = require('express')
const app = express()
const cors = require('cors');

// Habilita CORS para todas las rutas
app.use(cors());

app.get('/data', (req, res) => {
    const data = [
        {
            name: 'Jhon',
            lastName: 'Fernandez',
            age: 32
        },
        {
            name: 'Elmer',
            lastName: 'Ortiz',
            age: 34
        }
    ]

    res.json(data)
})

const PORT = 3000

app.listen(PORT, () => {
    console.log('Servidor ejecutandose en el puerto', PORT)
})