import { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

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
background-color: rgb(38, 41, 46);
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
width:400px;
outline: none;
border: none;
`
const Select = styled.select`
color: gray;
margin: 5px;
padding: 15px;
border-radius: 5px;
border: none;
width:400px;
outline: none;
border: none;
`
const Option = styled.option`
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
const FooterLink = styled.a`
font-weight: 600;
margin: 5px;
color: blue;
cursor: pointer;
&:hover{
    text-decoration: underline;
}
`
const FooterSection = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`


const Registration = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ otp: "", firstName: "", lastName: "", password: "", confirmPassword: "", blood_group: "", phone_no: "" });
    const { otp, firstName, lastName, password, confirmPassword, blood_group, phone_no } = formData;
    const handleOnChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleClick = async (event) => {
        event.preventDefault();
        const res = await fetch("http://localhost:5000/api/user/create/account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                otp: otp,
                firstname: firstName,
                lastname: lastName,
                phone_no: phone_no,
                password: password,
                confirmPassword: confirmPassword,
                blood_group: blood_group
            })
        })

        console.log(otp, firstName, lastName, password, confirmPassword, blood_group, phone_no);

        const data = await res.json();

        if (!data) {
            window.alert("Registration Failed")
        } else {
            window.alert("Registration Successful")
            navigate("/login");
        }

        //axios.post("http://localhost:5000/api/user/create/account", formData)
        //    .then(response => {
        //        console.log(response);
        //        setFormData(response.data);
        //        console.log(formData);
        //    })
        //    .catch(error => {
        //        console.log(error);
        //    });

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
                <Form onSubmit={handleClick}>
                    <Input type="text" placeholder="Enter OTP" value={otp} name="otp" onChange={handleOnChange} />
                    <Input type="text" placeholder="Enter First Name" value={firstName} name="firstName" onChange={handleOnChange} />
                    <Input type="text" placeholder="Enter Last Name" value={lastName} name="lastName" onChange={handleOnChange} />

                    <Select name='blood_group' onChange={handleOnChange}>
                        <Option disabled selected type="0.5">
                            Select Blood Group
                        </Option>
                        <Option value="A+">A+</Option>
                        <Option value="A-">A-</Option>
                        <Option value="B+">B+</Option>
                        <Option value="B-">B-</Option>
                        <Option value="AB+">AB+</Option>
                        <Option value="AB-">AB-</Option>
                        <Option value="O+">O+</Option>
                        <Option value="O-">O-</Option>
                    </Select>
                    <Input type="text" placeholder="Enter Phone No." value={phone_no} name="phone_no" onChange={handleOnChange} />
                    <Input type="text" placeholder="Enter Password" value={password} name="password" onChange={handleOnChange} />
                    <Input type="text" placeholder="Enter Confirm Password" value={confirmPassword} name="confirmPassword" onChange={handleOnChange} />
                    <Button type='submit'>Next step</Button>
                </Form>
                <FooterSection>
                    <text>Already have an account?</text>
                    <FooterLink><Link to='/login'>LOGIN HERE!</Link></FooterLink>
                </FooterSection>
            </RightWrapper>
        </Container>
    )
}

export default Registration;