const { DataTypes } = require('sequelize')
const conexao = require('../database.js')
const Cachorro = require('./cachorro.js');

const Atendimento = conexao.define('atendimentos', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true,
    },
    hora: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Essa opção garante unicidade
    },
    valor: {
        type: DataTypes.DOUBLE,
    },
    concluido: {
        type: DataTypes.BOOLEAN,
    },
    cachorroId: {
        field: 'cachorro_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cachorro,
            key: 'id',
        },
    },

}, {
    createdAt: false,
    updatedAt: false
})

Cachorro.belongsTo(Atendimento, { foreignKey: 'cachorroId' });
Atendimento.hasMany(Cachorro, { foreignKey: 'cachorroId' });


