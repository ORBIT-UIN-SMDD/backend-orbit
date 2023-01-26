const Joi = require("joi");

//Register Validation
const registerValidationCalonAnggota = (reqBody) => {
    const Schema = Joi.object({
        image: Joi.string(),
        nama: Joi.string().min(2).required(),
        tempat_lahir: Joi.string().min(2).required(),
        tanggal_lahir: Joi.date().min(2).required(),
        alamat: Joi.string().min(2).required(),
        jenis_kelamin: Joi.string().required(),
        fakultas: Joi.string().min(2).required(),
        prodi: Joi.string().min(2).required(),
        bidang: Joi.string().min(2).required(),
        alasan: Joi.string().min(2).required(),
        no_telp: Joi.string().min(10).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })
    return Schema.validate(reqBody)
};

//login Validation
const loginValidation = (reqBody) => {
    const Schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })
    return Schema.validate({ email: reqBody.email, password: reqBody.password })
};

module.exports = {
    registerValidationCalonAnggota,
    loginValidation
}