import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BloodDrop from "../../Assets/Home/BloodDrop/BloodDrop.gif";
import axios from 'axios';
import './Signup.css';

function Signup() {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        otp: "",
        user_name: '',
        age: '',
        number: '',
        password: '',
        city: '',
        blood_group: '',
        requirements: '',
    });

    const {
        otp,
        user_name,
        age,
        number,
        password,
        city,
        blood_group,
        requirements,
    } = userDetails;

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }



    const HandleSubmit = async (event) => {
        event.preventDefault();

        await axios.post("http://localhost:5000/api/user/create/account", userDetails)
            .then(response => {
                console.log(response.data);
                //setUserDetails(response.data);
                console.log(userDetails.success);
                if (response.data.success) {
                    window.alert(response.data.message)
                    navigate("/login");
                }

                else {
                    window.alert("OTP doesn't match!!!")
                    //console.log(response.data.message)
                    navigate("/signup");
                }
            })
            .catch(error => {
                window.alert("OTP Doesn't Match!!!")
                navigate("/signin");
            });



    }
    return (
        <div className="signupDiv">
            <div className="backArrow">&#x2190;</div>
            <form onSubmit={HandleSubmit} method="POST">
                <h1>BLOOD DONOR SIGNUP</h1>
                <div>
                    <img src={BloodDrop} alt="blood" />
                </div>
                <input type="text" name="otp" value={otp} placeholder="Enter Varification Code" onChange={handleChange} required />
                <input type="text" name="user_name" value={user_name} placeholder="Enter Your Name" onChange={handleChange} required />
                <input type="text" name="age" value={age} placeholder="Enter Your Age" onChange={handleChange} required />
                <input type="text" name="number" value={number} placeholder="Enter Your Phone Number" onChange={handleChange} required />
                <input type="password" name="password" value={password} placeholder="Enter Your Password" onChange={handleChange} required />
                <input type="text" name="city" value={city} placeholder="Enter Your City" onChange={handleChange} required />
                <select defaultValue={'Default'} name="blood_group" value={blood_group} onChange={handleChange} required>
                    <option disabled selected>Enter Your Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="O+">O+</option>
                    <option value="A-">A-</option>
                    <option value="B-">B-</option>
                    <option value="AB-">AB-</option>
                    <option value="O-">O-</option>
                </select>
                <select name="requirements" value={requirements} onChange={handleChange} required>
                    <option disabled selected>Enter Your Requirements</option>
                    <option value="Donor">Donor</option>
                    <option value="Receiver">Receiver</option>
                    <option value="Both">Both</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}


export default Signup;