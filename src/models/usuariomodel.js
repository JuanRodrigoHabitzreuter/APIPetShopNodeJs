const { DataTypes } = require('sequelize')
const conexao = require('../database.js')
const Cliente = require('./clientemodel.js')

const Usuario = conexao.define('usuarios', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    permissao: {
        field: 'permissao',
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    email: {
        field: 'email',
        type: DataTypes.STRING,
        allowNull: false
    },
    Senha: {
        field: 'senha',
        type: DataTypes.STRING,
        unique: true, // Essa opção garante unicidade
        allowNull: false,
    },
    usuarioId: {
        field: 'usuario_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id',
        }
    },
}, {
    createdAt: false,
    updatedAt: false
})

Cliente.hasOne(Usuario, { foreignKey: 'usuarioId' });

module.exports = Usuario