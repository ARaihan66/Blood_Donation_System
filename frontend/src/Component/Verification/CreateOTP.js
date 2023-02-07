import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BloodDrop from "../../Assets/Home/BloodDrop/BloodDrop.gif"
import './CreateOTP.css';

function CreateOtp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: ''
    });


    const { email } = formData;

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await fetch("http://localhost:5000/api/user/create/otp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email
            })
        })

        const data = await res.json();
        console.log(data);
        if (!data) {
            window.alert("OTP Sending Failed");
        } else {
            window.alert("OTP Successfully Send")
            navigate("/signup");
        }
    }

    return (
        <div className="OTPDiv">
            <form
                onSubmit={handleSubmit}
                method="POST"
            >
                <h1>EMAIL VERIFICATION</h1>
                <div>
                    <img src={BloodDrop} alt="blood" />
                </div>
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter Your Email"
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                >
                    GET OTP
                </button>
            </form>
        </div>
    )
}


export default CreateOtp
