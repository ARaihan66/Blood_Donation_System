import styled from "styled-components"
import { userData } from "../Data"
import profile1 from '../Picture/profile1.jpg'
const Container = styled.div`

`
const Wrapper = styled.div`
margin: 10px 150px;
height: 550px;
`

const ProfilePicture = styled.div`
background-color: #37959a;
height:40%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 5px;
`
const Image = styled.img`
height: 150px;
width: 150px;
border-radius: 50%;
margin: 10px 0px;
`
const Name = styled.h1`
font-size: 24px;
font-weight: 600;
margin-bottom: 10px;
`

const ProfileInfo = styled.div`
display: flex;
height: 60%;
`
const BloodGroup = styled.div`
flex: 1;
background-color: #ffbcec;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 70px;
font-weight: 500;
border-radius: 5px;
`
const Blood = styled.div`
width: 150px;
height: 150px;
border-radius:50%;
background-color:white;
display: flex;
align-items: center;
justify-content: center;
`

const InfoContainer = styled.div`
flex: 1;
background-color: #eaf5f6;
border-radius: 5px;
`
const Info = styled.div`
display: flex;
margin: 30px 25px;
`
const InfoText = styled.div`
font-size: 24px;
font-weight: 400;
display: flex;
align-items: center;
justify-content: center;
`
const Data = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
margin: 0px 10px;
`
const Calender = styled.input`
width: 50%;
margin: 0px 10px ;
`

const Button = styled.button`
width: 100%;
height: 40px;
font-size: 22px;
font-weight: 500;
border: none;
cursor: pointer;
background-color: #cfded8;
border-radius:5px;

&:hover{
    background-color: #a4dac5;
}
`


const Profile = () => {
    return (
        <Container>
            <Wrapper>
                <ProfilePicture>
                    <Image src={profile1} />
                    <Name>Mr. Shakil Khan</Name>
                </ProfilePicture>
                <ProfileInfo>
                    <BloodGroup>
                        <Blood>
                            B+
                        </Blood>
                    </BloodGroup>
                    <InfoContainer>
                        <Info>
                            <InfoText>
                                Address :
                            </InfoText>
                            <Data>
                                Manda, Naogaon
                            </Data>
                        </Info>

                        <Info>
                            <InfoText>
                                District :
                            </InfoText>
                            <Data>
                                Naogaon
                            </Data>
                        </Info>

                        <Info>
                            <InfoText>
                                Phone :
                            </InfoText>
                            <Data>
                                01767013859
                            </Data>
                        </Info>

                        <Info>
                            <InfoText>
                                Last Donation :
                            </InfoText>
                            <Calender type="date"
                                placeholder="dd-mm-yyyy" value=""
                                min="1997-01-01" max="2030-12-31" />
                        </Info>

                        <Info>
                            <InfoText>
                                Remaining :
                            </InfoText>
                            <Data>
                                112 Days
                            </Data>
                        </Info>

                    </InfoContainer>

                </ProfileInfo>
                <Button>
                    Edit/Update
                </Button>
            </Wrapper>
        </Container>
    )
}

export default Profile
