const { Schema, model, mongoose } = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const userSchema = Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Minimum length of name is 4 charecters"],
        maxlength: [25, "Maximum lenght of name is 25 charecters"],
        trim: true
    },

    blood_group: {
        type: String,
        required: [true, "Blood group is required"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Email is not valid"],
        unique: true
    },

    password: {
        type: String,
        minlength: [4, "Minimum length of password is 4 charecters"],
        maxlenght: [15, "Maximum length of password is 15 charecters"],
        required: [true, "Password is required"]
    },

    avater: {
        public_id: {
            type: String,
            required: true
        },

        url: {
            type: String,
            required: true
        }
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: "user"
    },

    user_donation: {
        type: Date,
        default: ''
    },


    donation_time: {
        type: String,
        default: ''
    },

    randomToken: {
        type: String,
        default: ''
    }

}, { timestamps: true })

// Hash password
userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        next();
    }
    let salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, parseInt(salt));
});


// JWT token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPRISE
    })
}

// Compare password
userSchema.methods.comparePassword = async function (givenPassword) {
    return await bcrypt.compare(givenPassword, this.password);
}

const userModel = model("User", userSchema);
module.exports = userModel;