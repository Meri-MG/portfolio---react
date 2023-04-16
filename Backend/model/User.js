const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true

    }
});

// Hash the password
userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
};


const User = mongoose.model('user', userSchema);

module.exports = User;