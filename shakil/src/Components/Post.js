import styled from "styled-components";
import { FaHospital, FaCalendar, FaCommentDots, FaMapMarkerAlt, FaDisease } from "react-icons/fa";
import { MdBloodtype, MdPhoneInTalk } from "react-icons/md";
const Container = styled.div`
box-shadow: 2px 2px 8px 8px gray;
margin: 40px 0px;
width: 700px;
height: 450px;
border-radius: 6px;
margin-top: 80px;
`

const Wrapper = styled.div`
height: 100%;
`
const UserName = styled.span`
height: 10%;
display: flex;
align-items: center;
justify-content: center;
font-size: 24px;
font-weight: 450;
background-color: #232b2b;
`
const ReqHeader = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #e6e6fa;
font-size: 25px;
font-weight: 500;
height: 20%;
`

const PostContainer = styled.div`
display: flex;
height: 70%;
`
const BloodGroup = styled.div`
flex: 2;
border: 1px solid gray;
font-size: 70px;
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
`
const Group = styled.div`
height: 150px;
width: 150px;
border-radius: 50%;
background-color:white;
color: red;
display: flex;
justify-content: center;
align-items: center;
`

const InfoContainer = styled.div`
flex: 3;
background-color:black;
`
const PostText = styled.div`
text-align: center;
margin-top: 20px;
font-size: 18px;
font-weight:500;
`
const PostOn = styled.span`
margin-left: 5px;
`
const Info = styled.div`
flex: 1;
display: flex;
justify-content: center;
margin: 10px 5px;
font-size: 22px;
font-weight:500;
`
const Address = styled.span`
flex: 1;
`
const Icon = styled.span`
margin: 0px 5px;
`
const InfoBottom = styled.div`
display: flex;
justify-content: space-between;
`
const Comment = styled.button`
flex: 1;
font-size: 22px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid gray;
border-radius: 8px;
cursor: pointer;
margin: 0px 5px;
`

const CommentIcon = styled.span`
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
margin: 5px;
`
const GoogleMap = styled.button`
flex: 1;
font-size: 22px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid gray;
border-radius: 8px;
cursor: pointer;
margin: 0px 5px;
`
const MapIcon = styled.span`
display: flex;
align-items: center;
justify-content: center;
margin-right: 5px;
`
const Post = (props) => {
    console.log(props.item);

    const {
        amountOfBlood, hospitalName, location, patientDisease,
        phoneNumber, statusTime,
        requiredBloodGroup, postedUser
    } = props.item;

    return (
        <Container>
            <Wrapper>
                <UserName> {postedUser.name}</UserName>
                <ReqHeader>
                    REQUEST FOR
                </ReqHeader>
                <PostContainer>
                    <BloodGroup>
                        <Group>
                            {requiredBloodGroup}
                        </Group>
                    </BloodGroup>
                    <InfoContainer>
                        <PostText>Published On
                            <PostOn>{statusTime
                            } </PostOn>
                        </PostText>
                        <Info>
                            <Icon> <FaHospital /></Icon>
                            <Address> {location}</Address>
                        </Info>
                        <Info>
                            <Icon> <MdBloodtype /></Icon>
                            <Address> {hospitalName}</Address>
                        </Info>
                        <Info>
                            <Icon> <MdPhoneInTalk /></Icon>
                            <Address>+88 {phoneNumber}</Address>
                        </Info>
                        <Info>
                            <Icon> <FaCalendar /></Icon>
                            <Address> {amountOfBlood}</Address>
                        </Info>
                        <Info>
                            <Icon> <FaDisease /></Icon>
                            <Address> {patientDisease}</Address>
                        </Info>
                        <InfoBottom>
                            <Comment>
                                <CommentIcon> <FaCommentDots /></CommentIcon>
                                Comment
                            </Comment>
                            <GoogleMap>
                                <MapIcon><FaMapMarkerAlt /></MapIcon>
                                See Map
                            </GoogleMap>
                        </InfoBottom>
                    </InfoContainer>
                </PostContainer>
            </Wrapper>
        </Container>
    )
}

export default Post
