import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
width:400px;
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
&:hover{
    background-color: white;
    color: blue;
}
`



const ResetPassword = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ otp: '', password: '', confirmPassword: '' });
    const { otp, password, confirmPassword } = formData;
    const handleOnClick = (event) => {
        setFormData({ formData, [event.target.name]: [event.target.value] })
    }

    const handleClick = async (event) => {
        event.preventDefault();

        await axios.put("http://localhost:5000/api/user/forget/password", formData)
            .then(response => {
                navigate("/login");
                window.alert("Successfully Reset Password")
            })
            .catch(error => {
                navigate("/reset_password");
                window.alert("Password Reset Failed")
            });
    }

    return (
        <Container>
            <LeftWrapper>
                <Image src="https://firstcareclinics.com/wp-content/uploads/2021/01/blood-donor.jpeg" />
            </LeftWrapper>
            <RightWrapper>
                <Heading>
                    <Title>Reset Password</Title>
                </Heading>
                <Form>
                    <Input type="email" placeholder="Enter OTP" value={otp} name="otp" onChange={handleOnClick} />
                    <Input type="email" placeholder="Enter Password" value={password} name="password" onChange={handleOnClick} />
                    <Input type="email" placeholder="Enter Confirm Password" value={confirmPassword} name="confirmPassword" onChange={handleOnClick} />
                    <Button type='submit' onClick={handleClick}>Reset Password</Button>
                </Form>
            </RightWrapper>
        </Container>
    )
}

export default ResetPassword