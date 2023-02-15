import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BloodDrop from "../../Assets/Home/BloodDrop/BloodDrop.gif";
import axios from 'axios';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    const { email, password } = formData;

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        //await axios.post("http://localhost:5000/api/user/login", formData)
        //    .then(response => {
        //        localStorage.setItem("token", response.data.Token);
        //        //setFormData(response.data);
        //        console.log(response.data)
        //        if (response.data.success) {
        //            window.alert("Login Successfull!!!");
        //            navigate("/feeds");
        //        } else {
        //            navigate("/login");
        //        }
        //    })
        //    .catch(error => {
        //        console.log(error);
        //        navigate("/login");
        //    });
        const res = await fetch("http://localhost:5000/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })

        const data = await res.json();
        console.log(data.message);
        if (data.success === false) {
            window.alert(data.message);
        } else {
            localStorage.setItem("token", data.token);
            window.alert(data.message)
            navigate("/feeds");
        }

    }

    function handleSignUp(e) {
        e.preventDefault();
        navigate("/create_otp")
    }

    return (
        <div className="loginDiv">
            <form
                onSubmit={handleSubmit}
                method="POST"
            >
                <h1>BLOOD DONOR LOGIN</h1>
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
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter Your Password"
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                >
                    LOGIN
                </button>
                <p> Don't have an account ?
                    <span onClick={handleSignUp}>
                        Signup
                    </span>
                </p>
            </form>
        </div>
    )
}


export default Login