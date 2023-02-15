import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Feed.css"

const Feed = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [showPostData, setShowPostData] = useState(false);
    const [comment, setComment] = useState(false);
    const [changeComment, setchangeComment] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem('token');
        //return axios.get(`http://localhost:5000/api/postNewsFeed/${token}`)
        //    .then((response) => {
        //        if (response.data.success) {
        //            setData(response.data.postData);
        //            setIsLoading(false);
        //            console.log(response.data.postData);
        //        } else {
        //            window.alert("Please Login First!!!")
        //        }
        //    }).catch(err => {
        //        setError(err);
        //        setIsLoading(false);
        //    })
        return fetch(`http://localhost:5000/api/postNewsFeed/${token}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.success) {
                    setShowPostData(true);
                    setData(data.postData);
                    setIsLoading(false);
                } else {
                    window.alert(data.message);
                    setIsLoading(false);
                    navigate("/login")
                }
            });

    }, [])


    const handleOpen = () => {
        setComment(!comment)
    }

    const handleUpdateDelete = () => {
        setchangeComment(!changeComment)
    }
    return (
        <div>
            {showPostData && <div className='feed-container'>
                {isLoading && <h2>Data is loading</h2>}
                {
                    data && data.map((item, index) => {
                        return (
                            <div className='feed'>
                                <div className='feed-image-container'><img src="https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221__340.jpg" alt='' />
                                    <h3 style={{ color: "white" }}>{item.postedUser.name}</h3>
                                </div>
                                <div className='request'>REQUEST FOR</div>
                                {/*<div className=''>*/}
                                <h5>BLOOD GROUP : {item.
                                    requiredBloodGroup}</h5>
                                <h5>AMOUNT OF BLOOD : {item.
                                    amountOfBlood} <span>Bags</span> </h5>
                                <h5>DONATION DATE : {item.date}</h5>
                                <h5>HOSPITAL : {item.
                                    hospitalName}</h5>
                                <h5>ADDRESS : {item.location}</h5>
                                <h5>PHONE NUMBER : {item.
                                    phoneNumber}</h5>
                                <div className='comment' onClick={handleOpen}>COMMENT</div>
                                {
                                    comment ? <div>
                                        <div>
                                            <h5>Name</h5>
                                            <p onClick={handleUpdateDelete} className="public-comment">Comment</p>
                                            {
                                                changeComment ? <div>
                                                    <button className='comment-change'>UPDATE</button>
                                                    <button className='comment-change'>DELETE</button>
                                                </div>
                                                    : null
                                            }
                                        </div>
                                        <form className='form'>
                                            <input type='text' placeholder='Comment here' />
                                            <button type="submit">SUBMIT</button>
                                        </form>
                                    </div> : null
                                }
                            </div>
                        )
                    })
                }
            </div>}
        </div>
    )

}

export default Feed
