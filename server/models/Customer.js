import mongoose from 'mongoose'


const Schema = mongoose.Schema
const model = mongoose.model

const schema = new Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    adress: {type: String, required: true},
    phone: {type: String, required:true},
    email: {type: String, required: true, unique: true}
})

export default model('Customer', schema)