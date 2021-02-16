import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const model = mongoose.model;


const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}); 

export default model('User', schema);