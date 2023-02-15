const { Schema, model, mongoose } = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const userSchema = Schema({
    otp: {
        type: String,
        required: true,
    },
    user_name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Minimum length of name is 4 charecters"],
        maxlength: [25, "Maximum lenght of name is 25 charecters"],
        trim: true
    },
    age: {
        type: String,
        required: [true, "Age is required"],
    },


    blood_group: {
        type: String,
        required: [true, "Blood group is required"]
    },

    email: {
        type: String,
        required: [true, "Email is required"]
    },

    password: {
        type: String,
        minlength: [4, "Minimum length of password is 4 charecters"],
        maxlenght: [15, "Maximum length of password is 15 charecters"],
        required: [true, "Password is required"],
        //select: false
    },
    number: {
        type: String,
        required: [true, "Phone Number is required"],
        //select: false
    },

    city: {
        type: String,
        required: [true, "City is required"],
        select: false
    },

    requirements: {
        type: String,
        required: [true, "Requirements is required"],
        select: false
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

    donationTime: {
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
userSchema.methods.getJwtToken = async function () {
    return await jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY)
}

// Compare password
userSchema.methods.comparePassword = async function (givenPassword) {
    return await bcrypt.compare(givenPassword, this.password).then(res => {
        console.log(res) // return true
    })
        .catch(err => console.error(err.message));
}

const userModel = model("User", userSchema);
module.exports = userModel;