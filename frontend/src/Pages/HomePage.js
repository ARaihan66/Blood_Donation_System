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
`
const BloodInfo = styled.div`

`
const BloodHeading = styled.h1`

`
const BloodText = styled.span`

`
const ListText = styled.span`

`
const BloodListImg = styled.img`

`
const BloodImg = styled.img`

`


const HomePage = () => {
    return (
        <Container>
            <Video src={BackgroundVideo} muted autoPlay loop />
            <TextContainer>
                <Heading>WELCOME TO BE A NEW DONOR</Heading>
                <Text>EVERY BLOOD DONOR IS A HERO</Text>
                <Button>GET START</Button>
            </TextContainer>
            <BloodInfoContainer>
                <BloodInfo>
                    <BloodHeading>What Conditions Would Make You Ineligible to Be a Donor?</BloodHeading>
                    <BloodText>
                        You will not be eligible to donate blood or platelets if you:
                    </BloodText>
                    <ListText><BloodImg src={BloodDrop} />
                        Have tested positive for hepatitis B or hepatitis C, lived with or had sexual contact in the past 12 months with anyone who has hepatitis B or symptomatic hepatitis C.
                        <ListText />
                        <ListText><BloodImg src={BloodDrop} />
                            Had a tattoo in the past 3 months or received a blood transfusion (except with your own blood) in the past 3 months.
                            <ListText />
                            <ListText><BloodImg src={BloodDrop} />
                                Have ever had a positive test for the AIDS virus.
                                <ListText />
                                <ListText><BloodImg src={BloodDrop} />
                                    Are a man who has had sex with another man in the past 3 months.
                                    <ListText />
                                    <ListText><BloodImg src={BloodDrop} />
                                        Have used injectable drugs, including anabolic steroids, unless prescribed by a physician in the past 3 months.
                                        <ListText />
                                        <ListText><BloodImg src={BloodDrop} />
                                            Have engaged in prostitution in the past 3 months.
                                            <ListText />
                                            <ListText><BloodImg src={BloodDrop} />
                                                Have traveled in the past 3 months, or lived in the past three years, in an area where malaria is endemic
                                            </ListText>
                                            <BloodText>
                                                Blood donors must wait at least 56 days between blood donations and 7 days before donating platelets. Platelet donors may donate once every seven days, not to exceed six times in any eight-week period, and must wait 7 days before donating blood.
                                            </BloodText>
                                        </BloodInfo>
                                        <BloodListImg src={BloodChart} />
                                    </BloodInfoContainer>
                                </Container>
                                )
}

                                export default HomePage
