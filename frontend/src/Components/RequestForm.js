import React, { useState } from 'react'
import styled from 'styled-components'
import BloodDrop from '../Picture/BloodDrop/BloodDrop.gif'


const Container = styled.div`
margin: 80px 150px;
background-color: rgb(64, 55, 35);
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Heading = styled.h1`
font-size: 16px;
text-align: center;
padding-top: 30px;
letter-spacing: 3px;
word-spacing: 5px;
`

const ImgContainer = styled.div`
width: 120px;
height: 120px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
`

const Img = styled.img`
max-width: 80%;
height: auto;
`

const Form = styled.form`
display: flex;
flex-direction: column;
margin:30px;
width: 100%;
`

const Top = styled.div`
display: flex;
`
const Left = styled.div`
flex: 1;
margin: 10px 30px;
`

const Select = styled.select`
width: 100%;
padding: 10px;
border-radius: 10px;
outline: none;
border: none;
`
const Option = styled.option`
`

const Right = styled.div`
flex: 1;
margin:10px 30px;
`

const InputText = styled.h2`
font-size: 14px;
letter-spacing: 1px;
`
const Input = styled.input`
width: 100%;
padding: 10px;
border-radius: 10px;
outline: none;
border: none;
`

const SubmitContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const SubmitButton = styled.button`
border: none;
outline: none;
background-color: blue;
padding: 10px 20px;
border-radius:10px;
cursor: pointer;
color: white;
font-weight:550;

&:hover{
color: blue;
background-color: white;
}
`

const RequestForm = () => {
    const [requestData, setRequestData] = useState({
        location: '', hospitalName: '', amountOfBlood: '', phoneNumber: '', requiredBloodGroup: '', patientDisease: ''
    })
    return (
        <Container>
            <Heading>CREATE A REQUEST FOR BLOOD</Heading>
            <ImgContainer><Img src={BloodDrop} /></ImgContainer>
            <Form>
                <Top>
                    <Left><InputText>Patient Disease<sup>*</sup></InputText>
                        <Input type='text' placeholder="Enter Disease Name" required /></Left>
                    <Right>
                        <InputText>Amount Of Blood<sup>*</sup></InputText>
                        <Input type='number' placeholder="Amount Of Blood" required min="1" />
                    </Right>
                </Top>
                <Top>
                    <Left>
                        <InputText>Blood Group<sup>*</sup></InputText>
                        <Select>
                            <Option disabled selected type="0.5">
                                Select Blood Group
                            </Option>
                            <Option>A+</Option>
                            <Option>A-</Option>
                            <Option>B+</Option>
                            <Option>B-</Option>
                            <Option>AB+</Option>
                            <Option>AB-</Option>
                            <Option>O+</Option>
                            <Option>O-</Option>
                        </Select>
                    </Left>
                    <Right>
                        <InputText>Donation Date<sup>*</sup></InputText>
                        <Input type='date' />
                    </Right>
                </Top>
                <Top>
                    <Left><InputText>Hospital Name<sup>*</sup></InputText>
                        <Input type='text' placeholder="Enter Hospital Name" required /></Left>
                    <Right>
                        <InputText>Address<sup>*</sup></InputText>
                        <Input type='text' placeholder="Enter Address" required />
                    </Right>
                </Top>

                <Top>
                    <Left><InputText>Phone Number</InputText>
                        <Input type='tel' placeholder="017xx xxxxxx" />
                    </Left>
                    <Right>
                        <InputText>Whatsapp Number</InputText>
                        <Input type='tel' placeholder="017xx xxxxxx" />
                    </Right>
                </Top>
                <SubmitContainer>
                    <SubmitButton type='submit'>SUBMIT</SubmitButton>
                </SubmitContainer>
            </Form>
        </Container>
    )
}

export default RequestForm
