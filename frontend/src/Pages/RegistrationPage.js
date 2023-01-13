import { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

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
border-radius: 5px;
color: white;
background-color: blue;
border-radius: 8px;
&:hover{
    background-color: white;
    color: blue;
    border: 1px solid blue;
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
    const [data, setData] = useState({ firstname: '', lastname: '', email: '', phoneNo: '', password: '' });
    const { firstname, lastname, email, phoneNo, password } = data;
    const handleOnClick = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const handleClick = async (event) => {
        event.preventDefault();
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                phoneNo: phoneNo,
                password: password
            })
        })

        const data = await res.json();

        if (!data) {
            window.alert("Registration Failed")
        } else {
            window.alert("Registration Successful")
            navigate("/login");
        }
    }

    return (
        <Container>
            <LeftWrapper>
                <Image src="https://t4.ftcdn.net/jpg/04/28/75/97/360_F_428759715_jsOPITlaytE3QXc2yI1D4U6uwZdVGkRp.jpg" />
            </LeftWrapper>
            <RightWrapper>
                <Heading>
                    <Title>SignUp Form</Title>
                </Heading>
                <Form >
                    <Input type="text" placeholder="Write First Name" value={firstname} name="firstname" onChange={handleOnClick} />
                    <Input type="text" placeholder="Write Last Name" value={lastname} name="lastname" onChange={handleOnClick} />
                    <Input type="email" placeholder="Write Email" value={email} name="email" onChange={handleOnClick} />
                    <Input type="text" placeholder="Write Phone No." value={phoneNo} name="phoneNo" onChange={handleOnClick} />
                    <Input type="text" placeholder="Write Password" value={password} name="password" onChange={handleOnClick} />
                    <Button type='submit' onClick={handleClick}>Next step</Button>
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