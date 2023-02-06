import React from 'react';
import "./Profile.css";
import User from "../../Assets/Profile/user.png"
import BloodGroup from "../../Assets/Profile/blood-group.png"
import Location from "../../Assets/Profile/location.png"
import PhoneCall from "../../Assets/Profile/phone-call.png"

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile'>
                <div className='image-container'>
                    <img src='https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221__340.jpg' alt="" />
                </div>
                <div className='icon-data-container'>
                    <div><img src={User} alt="blood-group" className='icon' /></div>
                    <p>Maisha Tabassum</p>
                </div>
                <div className='icon-data-container'>
                    <div><img src={BloodGroup} alt="blood-group" className='icon' /></div>
                    <p>Maisha Tabassum</p>
                </div>
                <div className='icon-data-container'>
                    <div><img src={Location} alt="blood-group" className='icon' /></div>
                    <p>Maisha Tabassum</p>
                </div>
                <div className='icon-data-container'>
                    <div><img src={PhoneCall} alt="blood-group" className='icon' /></div>
                    <p>Maisha Tabassum</p>
                </div>
            </div>

            <div className='post-container'>

            </div>
        </div>
    )
}

export default Profile
