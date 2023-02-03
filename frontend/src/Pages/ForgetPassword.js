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



const ForgetPassword = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ email: '' });
    const { email } = formData;
    const handleOnClick = (event) => {
        setFormData({ [event.target.name]: [event.target.value] })
    }

    const handleClick = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem("token")
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.post("http://localhost:5000/api/user/forget/password", formData, config)
            .then(response => {
                navigate("/reset_password");
                window.alert("Successfully Send OTP")
            })
            .catch(error => {
                navigate("/forget_password");
                window.alert("Failed To Send OTP")
            });
    }

    return (
        <Container>
            <LeftWrapper>
                <Image src="https://firstcareclinics.com/wp-content/uploads/2021/01/blood-donor.jpeg" />
            </LeftWrapper>
            <RightWrapper>
                <Heading>
                    <Title>Forget Password</Title>
                </Heading>
                <Form>
                    <Input type="email" placeholder="Write Email Address" value={email} name="email" onChange={handleOnClick} />
                    <Button type='submit' onClick={handleClick}>Send OTP</Button>
                </Form>
            </RightWrapper>
        </Container>
    )
}

export default ForgetPassword