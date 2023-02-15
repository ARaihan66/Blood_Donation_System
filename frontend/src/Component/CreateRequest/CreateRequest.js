import React, { useState } from 'react';
import styled from 'styled-components';
import BloodDrop from '../../Assets/Home/BloodDrop/BloodDrop.gif';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Container = styled.div`
margin: 80px 150px;
background-color: rgb(227, 218, 193);
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Heading = styled.h1`
/*font-size: 16px;*/
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
margin: 0px 50px;
`
const Left = styled.div`
flex: 1;
text-align: left;
margin: 10px 30px;
`

const Select = styled.select`
width: 100%;
/*padding: 10px;*/
border-radius: 10px;
padding: 20px;
outline: none;
border: none;
text-align: left;
margin:10px 0px;
`
const Option = styled.option`
`

const Right = styled.div`
text-align: left;
flex: 1;
margin:10px 30px;
`

const InputText = styled.h2`
font-size: 18px;
letter-spacing: 1px;
margin: 5px 0px;
`
const Input = styled.input`
width: 100%;
margin: 10px 0px;
padding: 20px;
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
width: 400px;
padding: 20px;

&:hover{
color: blue;
background-color: white;
}
`

const RequestForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null)
  const [formData, setFormData] = useState({
    location: '', hospitalName: '', amountOfBlood: '', phoneNumber: '', whatsappNumber: '', requiredBloodGroup: '', patientDisease: '', date: new Date()
  })
  const { location, hospitalName, amountOfBlood, phoneNumber, whatsappNumber, requiredBloodGroup, patientDisease, date } = formData;


  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    //axios.post('http://localhost:5000/api/post/create', formData)
    await axios.post(`http://localhost:5000/api/post/create/${token}`, formData)
      .then(response => {
        window.alert(response.data.message);
        navigate('/feeds')
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.massage);
        window.alert("Please Login First");
      });
  }


  return (
    <Container>
      <Heading>CREATE A REQUEST FOR BLOOD</Heading>
      <ImgContainer><Img src={BloodDrop} /></ImgContainer>
      <Form method='POST'>
        <Top>
          <Left><InputText>Patient Disease<sup>*</sup></InputText>
            <Input type='text' placeholder="Enter Disease Name" value={patientDisease} name="patientDisease" required onChange={handleChange} /></Left>
          <Right>
            <InputText>Amount Of Blood (Bags)<sup>*</sup></InputText>
            <Input type='number' placeholder="Number Of Bags Blood" min="1" value={amountOfBlood} name="amountOfBlood" required onChange={handleChange} />
          </Right>
        </Top>
        <Top>
          <Left>
            <InputText>Blood Group<sup>*</sup></InputText>
            <Select name='requiredBloodGroup' value={requiredBloodGroup} required onChange={handleChange}>
              <Option disabled selected>Select Blood Group</Option>
              <Option value="A+">A+</Option>
              <Option value="A-">A-</Option>
              <Option value="B+">B+</Option>
              <Option value="B-">B-</Option>
              <Option value="AB+">AB+</Option>
              <Option value="AB-">AB-</Option>
              <Option value="O+">O+</Option>
              <Option value="O-">O-</Option>
            </Select>
          </Left>
          <Right>
            <InputText>Donation Date<sup>*</sup></InputText>
            <Input type='date' value={date} name='date' required onChange={handleChange} />
          </Right>
        </Top>
        <Top>
          <Left><InputText>Hospital Name<sup>*</sup></InputText>
            <Input type='text' placeholder="Enter Hospital Name" value={hospitalName} name='hospitalName' required onChange={handleChange} /></Left>
          <Right>
            <InputText>Address<sup>*</sup></InputText>
            <Input type='text' placeholder="Enter Address" value={location} name='location' required onChange={handleChange} />
          </Right>
        </Top>

        <Top>
          <Left><InputText>Phone Number</InputText>
            <Input type='tel' placeholder="017xx xxxxxx" value={phoneNumber} name='phoneNumber' onChange={handleChange} />
          </Left>
          <Right>
            <InputText>Whatsapp Number</InputText>
            <Input type='tel' placeholder="017xx xxxxxx" value={whatsappNumber} name='whatsappNumber' onChange={handleChange} />
          </Right>
        </Top>
        <SubmitContainer>
          <SubmitButton type='submit' onClick={handleSubmit}>SUBMIT</SubmitButton>
        </SubmitContainer>
      </Form>
    </Container >
  )
}

export default RequestForm
