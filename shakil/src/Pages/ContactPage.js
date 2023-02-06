import styled from "styled-components"

const Container = styled.div`
margin: 100px 200px;
background-color: 	#1a1a1a;
z-index: 2;
`
const Heading = styled.h1`
padding: 25px 0px;
text-align: center;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Top = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
const Input = styled.input`
width: 100%;
margin: 20px 20px;
padding: 20px;
color: white;
border: none;
border-radius: 5px;
background-color: black;
`
const Bottom = styled.div`
display: flex;
width: 100%;
`
const TextArea = styled.textarea`
height: 300px;
resize: none;
margin: 20px 20px;
padding: 20px;
color: white;
flex: 1;
border-radius: 5px;
border: none;
background-color: black;
`
const SubmitButton = styled.button`
border: 1px solid white;
color: white;
background-color: black;
padding: 15px 20px;
margin: 20px 380px;
border-radius: 5px;
cursor: pointer;
`


const ContactPage = () => {
    return (
        <Container style={{ backgroundColor: "#404040" }}>
            <Heading>LET'S TALK</Heading>
            <Form>
                <Top>
                    <Input type='text' placeholder="Your Name" />
                    <Input type='email' placeholder="Your Email Address" />
                </Top>
                <Bottom>
                    <TextArea placeholder="Message" />
                </Bottom>
                <SubmitButton>SEND</SubmitButton>
            </Form>
        </Container>
    )
}

export default ContactPage
