const { DataTypes } = require('sequelize')
const conexao = require('../database.js')
const Cliente = require('./clientemodel.js')

const Cachorro = conexao.define('cachorros', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        field:'nome',
        type: DataTypes.STRING,
        allowNull: false
    },
    raca: {
        ield: 'raca',
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        field: 'sexo',
        type: DataTypes.STRING,
        allowNull: false
    },
    clienteId: {
        field: 'cliente_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cliente,
            key: 'id',
        },
    },
}, {
    createdAt: false,
    updatedAt: false
})

Cachorro.belongsTo(Cliente, { foreignKey: 'clienteId' });
Cliente.hasMany(Cachorro, { foreignKey: 'clienteId' });

module.exports = Cachorro


