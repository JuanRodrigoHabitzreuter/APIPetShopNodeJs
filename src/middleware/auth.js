const jwt = require('jsonwebtoken')
const config = require('../config')


function authmiddleware(req, res, next) {
    const token = req.headers['Autorizado'];

    if (!token) {        
        return res.status(401).json({ message: 'Token não fornecido' })
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: ' Não Autorizado' })
        }
        console.log(decoded)
        req.session = decoded

        next()
    })
}

module.exports = authmiddleware


// if (permissao == 0)
// 0 = administrador
// else if(permissao == 1)
// 1 = cliente
// else if( permissao == 2)
// 2 = atendente