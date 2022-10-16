const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const userSchema = Schema({
    name: {
        type: String,
        require: [true, "Name is required"],
        minlength: [4, "Minimum length of name is 4 charecters"],
        maxlength: [12, "Maximum lenght of name is 12 charecters"],
        trim: true
    },

    email: {
        type: String,
        require: [true, "Email is required"],
        validate: [Validator.isEmail, "Email is not valid"],
        unique: true
    },

    password: {
        type: String,
        minlength: [4, "Minimum length of password is 4 charecters"],
        maxlenght: [8, "Maximum length of password is 8 charecters"],
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
        default: "user"
    },

    resetPasswordToken: String,
    resetPasswordTime: Date
})

// Hash password
userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
    } catch (error) {
        console.log(error.message)
    }
});


// JWT token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPRISE
    })
}

// Compare password
userSchema.methods.passwordCompare(givenPassword) = async function () {
    return await bcrypt.compare(givenPassword, this.password);
}

//Forgot password
userSchema.methods.getResetToken = function () {
    // Generate token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hash token and set to resetPasswordToken field
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordTime = Date.now() + 15 * 60 * 3000;
}
