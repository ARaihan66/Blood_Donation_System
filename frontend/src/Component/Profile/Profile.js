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
                    <h5>Maisha Tabassum</h5>
                </div>
                <div className='icon-data-container'>
                    <div><img src={BloodGroup} alt="blood-group" className='icon' /></div>
                    <h5>B+</h5>
                </div>
                <div className='icon-data-container'>
                    <div><img src={Location} alt="blood-group" className='icon' /></div>
                    <h5>Mohakhali</h5>
                </div>
                <div className='icon-data-container'>
                    <div><img src={PhoneCall} alt="blood-group" className='icon' /></div>
                    <h5>01767013859</h5>
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

        </div>
    )
}

export default Profile
