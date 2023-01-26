const validation = require("../helpers/validation")
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const model = require("../config/models/index");
const { today } = require("../helpers/date");


let controller = {}

controller.register = async (req, res) => {


    const nama = req.body.nama
    const tempat_lahir = req.body.tempat_lahir
    const tanggal_lahir = req.body.tanggal_lahir
    const alamat = req.body.alamat
    const jenis_kelamin = req.body.jenis_kelamin
    const fakultas = req.body.fakultas
    const prodi = req.body.prodi
    const bidang = req.body.bidang
    const alasan = req.body.alasan
    const no_telp = req.body.no_telp
    const email = req.body.email
    const password = req.body.password
    const image = req.file !== undefined ? req.body.image = req.file.path : ''

    console.log(req.body);   


    //validation Data Check Before create new user
    const validationError = validation.registerValidationCalonAnggota(req.body).error
    if (validationError) return res.status(400).json({ message: validationError.details[0].message })

    const checkEmail = await model.calon_anggota.findOne({ where: { email: email } });
    if (checkEmail !== null) {
        res.status(400).json({
            status: "failed",
            message: "Email Already Exist"
        })

    } else {
        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashingPassword = await bcrypt.hash(password, salt)

        const result = await model.calon_anggota.create({
            no_pendaftaran: `ORBIT/${nama}/${bidang}`,
            image,
            nama,
            tempat_lahir,
            tanggal_lahir,
            alamat,
            jenis_kelamin,
            fakultas,
            prodi,
            bidang,
            alasan,
            no_telp,
            email,
            password: hashingPassword
        })

        res.json({
            status: "success",
            message: "User Succesfully added",
            result
        })
    }

};

controller.login = async (req, res) => {

    const email = req.body.email
    const password = req.body.password

    //validation Data Check
    const validationError = validation.loginValidation(req.body).error
    if (validationError) return res.status(400).json({ message: validationError.details[0].message })

    const result = await model.user.findOne({ where: { email: email } })
    if (result !== null) {
        // //check password
        const validPassword = await bcrypt.compare(password, result.password)
        if (!validPassword) return res.status(400).json({ message: "Email or password wrong!" })

        //create an assign a token
        const token = jwt.sign({ user_id: result.id }, process.env.TOKEN_SECRET)
        res.header("auth-token", token)

        res.json({
            status: "success",
            messsage: "logged In",
            token: token,
            name: result.name,
            email: result.email
        });
    } else {
        res.status(400).json({ status: "failed", message: "Email or password wrong!" })
    }

};

module.exports = controller;