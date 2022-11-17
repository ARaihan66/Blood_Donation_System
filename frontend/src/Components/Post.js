import styled from "styled-components";
import { FaHospital, FaCalendar, FaCommentDots, FaMapMarkerAlt, FaDisease } from "react-icons/fa";
import { MdBloodtype, MdPhoneInTalk } from "react-icons/md";
const Container = styled.div`
box-shadow: 3px 3px 3px 5px gray;
margin: 40px 0px;
width: 700px;
height: 400px;
border-radius: 6px;
`

const Wrapper = styled.div`
background-color: #c8dfba;
height: 100%;
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
const UserName = styled.span`
margin: 10px 5px;
`

const PostContainer = styled.div`
display: flex;
height: 80%;
`
const BloodGroup = styled.div`
flex: 2;
border: 1px solid gray;
background-color: #ffbcec;
font-size: 70px;
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
`
const InfoContainer = styled.div`
flex: 3;
`
const PostText = styled.div`
text-align: center;
margin-top: 20px;
font-size: 20px;
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
font-size: 25px;
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
font-size: 25px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid gray;
border-radius: 8px;
cursor: pointer;
margin: 0px 5px;

&:hover{
    background-color: #e6e6fa;
}
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
font-size: 25px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid gray;
border-radius: 8px;
cursor: pointer;
margin: 0px 5px;

&:hover{
    background-color: #e6e6fa;
}
`
const MapIcon = styled.span`
display: flex;
align-items: center;
justify-content: center;
margin-right: 5px;
`
const Post = (props) => {
    return (
        <Container>
            <Wrapper>
                <ReqHeader>
                    Request From
                    <UserName>{props.item.name}</UserName>
                </ReqHeader>
                <PostContainer>
                    <BloodGroup>
                        {props.item.bloodGroup}
                    </BloodGroup>
                    <InfoContainer>
                        <PostText>Published On
                            <PostOn>{props.item.updatedAt} </PostOn>
                        </PostText>
                        <Info>
                            <Icon> <FaHospital /></Icon>
                            <Address> {props.item.address}</Address>
                        </Info>
                        <Info>
                            <Icon> <MdBloodtype /></Icon>
                            <Address> {props.item.amountOfBlood}</Address>
                        </Info>
                        <Info>
                            <Icon> <MdPhoneInTalk /></Icon>
                            <Address>+88 {props.item.phone}</Address>
                        </Info>
                        <Info>
                            <Icon> <FaCalendar /></Icon>
                            <Address> {props.item.date}</Address>
                        </Info>
                        <Info>
                            <Icon> <FaDisease /></Icon>
                            <Address> {props.item.disease}</Address>
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
