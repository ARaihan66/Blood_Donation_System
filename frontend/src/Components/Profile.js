import styled from "styled-components";
import { userData } from "../Data";
import profile1 from '../Picture/profile1.jpg';
import ModalPage from "../Pages/ModalPage";
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
font-size: 20px;
font-weight: 500;
margin-bottom: 10px;
background-color: #37959a;
color: black;
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
`
const Blood = styled.div`
width: 170px;
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
`
const Info = styled.div`
display: flex;
margin: 30px 25px;
background-color: #eaf5f6;
color: black;
`
const InfoText = styled.div`
font-size: 24px;
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;
background-color: #eaf5f6;
color: black;
`
const Data = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
margin: 0px 10px;
background-color: #eaf5f6;
color: black;
`
const Calender = styled.input`
width: 50%;
margin: 0px 10px ;
background-color: #eaf5f6;
color: black;
`
const ButtonContainer = styled.div`
display: flex;
`
const ButtonOne = styled.button`
flex:1;
width: 100%;
height: 40px;
font-size: 22px;
font-weight: 500;
border: none;
cursor: pointer;
background-color: #cfded8;


&:hover{
    background-color: #a4dac5;
    border-radius:7px;
}
`
const ButtonTwo = styled.button`
flex:1;
width: 100%;
height: 40px;
font-size: 22px;
font-weight: 500;
border: none;
cursor: pointer;
background-color: #cfded8;

&:hover{
    background-color: #a4dac5;
    border-radius:10px;
}
`
const ButtonThree = styled.button`
flex: 2;
width: 100%;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 500;
border: none;
cursor: pointer;
background-color: #cfded8;


&:hover{
    background-color: #a4dac5;
    border-radius:7px;
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
                <ButtonContainer>
                    <ButtonOne>
                        LOG OUT
                    </ButtonOne>
                    <ButtonTwo>
                        DELETE ACCOUNT
                    </ButtonTwo>
                    <ButtonThree>
                        <ModalPage />
                    </ButtonThree>
                </ButtonContainer>
            </Wrapper>
        </Container>
    )
}

export default Profile
