const action = require('../constants/action')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        require: true
    },
    phoneNumber: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    }, 
    password: {
        type: String,
        
        require: true,
        minlength: 8
    }
})

userSchema.pre(action.SAVE, async function(next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

const User = mongoose.model('userSchema', userSchema, 'user_accounts');

module.exports = User;