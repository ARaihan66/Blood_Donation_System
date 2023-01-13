import styled from "styled-components"
import BackgroundVideo from '../Video/BackgroundVideo.mp4'
import BloodChart from '../Picture/BloodChart/BloodChart.jpeg'
import BloodDrop from '../Picture/BloodDrop/BloodDrop.gif'

const Container = styled.div`
width: 100%;
height: 100vh;
position: relative;
box-sizing: border-box;
`
const Video = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
opacity: 0.1;
`
const TextContainer = styled.div`
position: absolute;
width: 100%;
height: 100%;
top:0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Heading = styled.h1`

`

const Text = styled.span`
font-size: 18px;
margin: 10px 0px;
`
const Button = styled.button`
padding: 10px 15px;
margin: 10px 0px;
font-size: 16px;
background-color: none;
border-radius: 5px;
border: none;
cursor: pointer;

&:hover{
    background-color: white;
    color: black;
    border: none;
}
`

const BloodInfoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #9c27b0;
`
const BloodDonationInfo = styled.div`
background: black;
margin: 20px 15px;
height: 100vh;
width: 100vw;
`
const BloodHeading = styled.h1`
text-align: center;
margin: 10px 15px;
`
const BloodText = styled.div`
font-size: 18px;
margin: 15px 15px;
text-align: justify;
`
const List = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 15px 20px;
`
const ListText = styled.span`
flex: 1;
`
const BloodImg = styled.img`
height: 3%;
width: 3%;
`
const BloodListImg = styled.img`
margin: 20px 15px;
height: 100vh;
width: 100vw;
`


const HomePage = () => {
    return (
        <Container>
            <Video src={BackgroundVideo} muted autoPlay loop />
            <TextContainer>
                <Heading>“BE GRATEFUL AND DONATE BLOOD”</Heading>
                <Text>EVERY BLOOD DONOR IS A HERO</Text>
                <Button>GET START</Button>
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
