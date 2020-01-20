const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// crear el schema de usuario
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type : String }
}, { collection : 'user'});

const User = mongoose.model('User', userSchema);

module.export = User;