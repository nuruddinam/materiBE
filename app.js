const express = require ('express')
const app = express ()
const route = require('./src/route')

app.use(express.json())
app.use('/api', route )



app.get ('/', (req, res) => {
    try {
        res.status(200).json({
            message: 'Data berhasil dipanggil'
        })
    } catch (error){
        console.log(error)
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
})

app.listen(4000, ()=> {
    console.log('Server is running on port 4000')
})