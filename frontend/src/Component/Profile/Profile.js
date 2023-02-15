import React, { useState, useEffect } from 'react';
import "./Profile.css";
import User from "../../Assets/Profile/user.png"
import BloodGroup from "../../Assets/Profile/blood-group.png"
import Location from "../../Assets/Profile/location.png"
import PhoneCall from "../../Assets/Profile/phone-call.png"
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState("");
    const [showProfile, setShowProfile] = useState(false);
    //const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        return fetch(`http://localhost:5000/api/user/profile/me/${token}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.User);
                if (data.success) {
                    setUserData(data.User);
                    setIsLoading(false);
                    setShowProfile(true);
                } else {
                    window.alert(data.message);
                    setIsLoading(false);
                    navigate("/login")
                }
            })
            .catch((err) => {
                console.log(err.message)
            })

    }, [])

    return (
        <div>
            {showProfile && <div className='profile-container'>
                {isLoading && <h2>Data is loading</h2>}
                <div className='profile'>
                    <div className='image-container'>
                        <img src='https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221__340.jpg' alt="" />
                    </div>
                    <div className='icon-data-container'>
                        <div><img src={User} alt="blood-group" className='icon' /></div>
                        <h5>{userData.user_name}</h5>
                    </div>
                    <div className='icon-data-container'>
                        <div><img src={BloodGroup} alt="blood-group" className='icon' /></div>
                        <h5>{userData.blood_group
                        }</h5>
                    </div>
                    {/*<div className='icon-data-container'>
                    <div><img src={Location} alt="blood-group" className='icon' /></div>
                    <h5>Mohakhali</h5>
                </div>*/}

                    <div className='icon-data-container'>
                        <div><img src={PhoneCall} alt="blood-group" className='icon' /></div>
                        <h5>{userData.number}</h5>
                    </div>

                    <div className=''>
                        <button>
                            UPDATE PROFILE
                        </button>
                        <button>
                            DELETE ACCOUNT
                        </button>
                        <button onClick={() => {
                            localStorage.removeItem('token');
                            navigate('/login')
                        }}>
                            LOG OUT
                        </button>
                    </div>
                </div>


                <div className='feed-container'>
                    <div className='feed-image-container'><img src="https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221__340.jpg" alt='' />
                        <h3 style={{ color: "white" }}>SHAKIL</h3>
                    </div>
                    <div className='request'>REQUEST FOR</div>
                    {/*<div className=''>*/}
                    <h5>BLOOD GROUP :</h5>
                    <h5>AMOUNT OF BLOOD :</h5>
                    <h5>DONATION DATE :</h5>
                    <h5>HOSPITAL :</h5>
                    <h5>ADDRESS :</h5>
                    <h5>PHONE NUMBER :</h5>
                </div>

            </div>}
        </div>
    )
}

export default Profile
