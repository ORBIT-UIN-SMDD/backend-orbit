const { DataTypes } = require('sequelize');
const db = require("../database/mysql");

const calon_anggota = db.define('calon_anggota', {
    // Model attributes are defined here
    no_pendaftaran: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tempat_lahir: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tanggal_lahir: {
        type: DataTypes.DATE,
        allowNull: false
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: true
    },
    jenis_kelamin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fakultas: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prodi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bidang: {
        type: DataTypes.STRING,
        allowNull: false
    },
    alasan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    no_telp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
    freezeTableName: false,
    timestamps: false
});

// console.log(User === db.models.User); // true

module.exports = calon_anggota