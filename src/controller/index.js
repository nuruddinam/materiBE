const service = require("../service")
const controller = {}
const helper = require("../helper")

    controller.panggilNama = (req, res) => {
        try {
            const fullname = req.body.nama
            const lastName = req.params.lastName
            const result = service.panggilNama (fullname, lastName)

            res.status (200).json({
                Message: result
            })

        } catch (error) {
            helper.controllerErrorHandler(error, res)
        }
    }

controller. registrasi = (req, res) => {
    try {
        const {firstName, lastName, userName, password, verifikasiPassword } = req.body
        console.log (password, verifikasiPassword)
        const verificator = service.validasiPassword (password, verifikasiPassword )
        
        if(!verificator) return res.status(400).json({message: 'Password tidak sesuai'})
            
        res.status(200).json({message :'Berhasil Registrasi'})

    } catch (error) {
       helper.controllerErrorHandler(error, res)
    }
}

module.exports = controller