import styled from "styled-components"
import BackgroundVideo from '../Video/BackgroundVideo.mp4'
import BloodChart from '../Picture/BloodChart/BloodChart.jpeg'
import BloodDrop from '../Picture/BloodDrop/BloodDrop.gif'
import { useNavigate } from "react-router-dom"

const Container = styled.div`
position: relative;
box-sizing: border-box;
`
const Video = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
opacity: 0.4;
`
const TextContainer = styled.div`
position: absolute;
top:20%;
left: 35%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Heading = styled.h1`
font-size: 20px;
`

const Text = styled.span`
font-size: 14px;
margin: 10px 0px;
`
const Button = styled.button`
padding: 15px 20px;
margin: 10px 0px;
font-size: 14px;
background-color: rgb(231, 230, 240);
color: rgb(15, 11, 56);
border-radius: 5px;
border: none;
cursor: pointer;

&:hover{
    background-color:  rgb(15, 11, 56);
    color: rgb(231, 230, 240);
    border: none;
}
`


const BloodInfoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 10px 110px;
border-radius: 10px;
/*height: 50vh;*/
`
const BloodDonationInfo = styled.div`
background: rgb(176, 174, 184);
border-radius: 10px;
`
const BloodHeading = styled.h1`
text-align: center;
margin: 20px 15px;
color: rgb(145, 17, 39);
`
const BloodText = styled.div`
font-size: 18px;
margin: 15px 15px;
text-align: justify;
color: black;
`
const List = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 15px 20px;
`
const ListText = styled.span`
flex: 1;
color: black;
`
const BloodImg = styled.img`
height: 3%;
width: 3%;
`
const BloodListImg = styled.img`
border-radius: 10px;
margin: 20px 15px;
height: 100%;
`


const HomePage = () => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate("/login")
    }
    return (
        <Container>
            <Video src={BackgroundVideo} muted autoPlay loop />
            <TextContainer>
                <Heading>“BE GRATEFUL AND DONATE BLOOD”</Heading>
                <Text>EVERY BLOOD DONOR IS A HERO</Text>
                <Button onClick={handleRedirect}>GET START</Button>
            </TextContainer>

            <BloodInfoContainer>
                <BloodDonationInfo>
                    <BloodHeading>What Conditions Would Make You Ineligible to Be a Donor?</BloodHeading>
                    <BloodText>
                        You will not be eligible to donate blood or platelets if you:
                    </BloodText>

                    <List>
                        <BloodImg src={BloodDrop} /><ListText>
                            Have tested positive for hepatitis B or hepatitis C, lived with or had sexual contact in the past 12 months with anyone who has hepatitis B or symptomatic hepatitis C.
                        </ListText>
                    </List>

                    <List>
                        <BloodImg src={BloodDrop} /><ListText>
                            Had a tattoo in the past 3 months or received a blood transfusion (except with your own blood) in the past 3 months.
                        </ListText>
                    </List>

                    <List>
                        <BloodImg src={BloodDrop} /><ListText>
                            Have ever had a positive test for the AIDS virus.
                        </ListText>
                    </List>

                    <List>
                        <BloodImg src={BloodDrop} /><ListText>
                            Are a man who has had sex with another man in the past 3 months.
                        </ListText>
                    </List>
                    <List>
                        <BloodImg src={BloodDrop} /><ListText>
                            Have used injectable drugs, including anabolic steroids, unless prescribed by a physician in the past 3 months.
                        </ListText>
                    </List>

                    <List>
                        <BloodImg src={BloodDrop} /><ListText>
                            Have engaged in prostitution in the past 3 months.
                        </ListText>
                    </List>

                    <List>
                        <BloodImg src={BloodDrop} /><ListText>
                            Have traveled in the past 3 months, or lived in the past three years, in an area where malaria is endemic
                        </ListText>
                    </List>

                    <BloodText>
                        Blood donors must wait at least 56 days between blood donations and 7 days before donating platelets. Platelet donors may donate once every seven days, not to exceed six times in any eight-week period, and must wait 7 days before donating blood.
                    </BloodText>
                </BloodDonationInfo>
                <BloodListImg src={BloodChart} />
            </BloodInfoContainer>
        </Container>
    )
}
export default HomePage;
