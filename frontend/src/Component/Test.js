{ isLoading && <DataLoading>Data is loading</DataLoading> }
{
    data &
        data.map((item, index) => (
            return <div className='feed-container'>
        <div className='feed-image-container'><img src="https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221__340.jpg" alt='' />
            <h3 style={{ color: "white" }}>Shakil</h3>
        </div>
        <div className='request'>REQUEST FOR</div>
        {/*<div className=''>*/}
        <h5>BLOOD GROUP :</h5>
        <h5>AMOUNT OF BLOOD :</h5>
        <h5>DONATION DATE :</h5>
        <h5>HOSPITAL :</h5>
        <h5>ADDRESS :</h5>
        <h5>PHONE NUMBER :</h5>
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
        )
}