import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
display: flex;
height: 100vh;
justify-content: space-between;
`
const LeftWrapper = styled.div`
flex: 1;
display:flex;
flex-direction: column;
background-repeat: no-repeat;
`
const Image = styled.img`
display:flex;
justify-content: center;
align-items: center;
max-width: 100%;
height: 100%;
`
const RightWrapper = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #eee;
height: 100%;
width: 100%;
`
const Heading = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
margin: 20px;
`

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Input = styled.input`
margin: 5px;
padding: 15px;
border-radius: 5px;
border: none;
outline: none;
width:400px;
outline: none;
`
const Button = styled.button`
margin: 10px;
padding: 15px 30px;
font-weight: 600;
border: none;
outline: none;
border-radius: 5px;
color: white;
background-color: blue;
border-radius: 8px;
cursor: pointer;
&:hover{
    background-color: white;
    color: blue;
    /*border: 1px solid blue;*/
}
`


const CreateOtp = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: '' });
    const { email } = data;

    const handleOnClick = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const handleClick = async (event) => {
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

        if (!data) {
            window.alert("OTP Sending Failed");
        } else {
            window.alert("OTP Successfully Send")
            navigate("/signup");
        }
    }

    return (
        <Container>
            <LeftWrapper>
                <Image src="https://firstcareclinics.com/wp-content/uploads/2021/01/blood-donor.jpeg" />
            </LeftWrapper>
            <RightWrapper>
                <Heading>
                    <Title>SignUp Form</Title>
                </Heading>
                <Form method='POST'>
                    <Input type="email" placeholder="Enter Email" value={email} name="email" onChange={handleOnClick} />
                    <Button type='submit' onClick={handleClick}>Next step</Button>
                </Form>
            </RightWrapper>
        </Container>
    )
}

export default CreateOtp;