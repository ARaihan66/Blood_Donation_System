import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';
import BloodDrop from '../Logo/BloodDrop.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
margin: 0px 0px;
background-color: rgb(87, 80, 62);
color: white;
position: fixed;
top: 0;
z-index: 2;
overflow: hidden;
width:100%;
`

const Wrapper = styled.div`
display: flex;
`
const Left = styled.div`
flex:2;
display: flex;
align-items: center;
justify-content: center;
`
const Logo = styled.h1`
font-size: 18px;
`
const BloodImg = styled.img`
width: 15%;
height: 50%;
`
const Center = styled.div`
flex:2;
display: flex;
align-items: center;
justify-content: center;
`
const SearchContainer = styled.div`
width: 100%;
border: 1px solid lightgray;
margin: 8px;
display: flex;
border-radius: 5px;
background-color: rgb(194, 178, 136);
`
const Select = styled.select`
flex: 4;
border: none;
width: 80%;
height: 40px;
padding-left: 15px;
font-size:12px;
border: none;
outline: none;
`
const Option = styled.option`
opacity: ${props => props.type};
background-color: rgb(194, 178, 136);
`
const SearchIcon = styled.span`
margin: 0px 18px;
display: flex;
font-size: 20px;
align-items: center;
justify-content: center;
cursor: pointer;
`

const Right = styled.div`
flex:3;
display: flex;
justify-content: center;
align-items: center;
`
const MenuItem = styled.div`
margin-left: 15px;
cursor: pointer;
`
const TopLink = styled(Link)`
color: rgb(23, 23, 21);
font-size: 14px;
padding: 5px 10px;
font-weight: 600;
border-radius: 5px;
text-decoration: none;

&:hover, &:focus{
color: white;
background-color: rgb(23, 23, 21);
}
`

const ContactLink = styled.a`
color: rgb(23, 23, 21);
font-size: 14px;
padding: 5px 10px;
font-weight: 600;
border-radius: 5px;
text-decoration: none;
&:hover{
color: white;
background-color: rgb(23, 23, 21);
}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <BloodImg src={BloodDrop} />
                    <Logo>BLOOD DONOR</Logo>
                </Left>
                <Center>
                    <SearchContainer>
                        <Select>
                            <Option disabled selected type="0.5">
                                Search Blood Group
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
                        <SearchIcon>
                            <CiSearch />
                        </SearchIcon>
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuItem><TopLink to='/'>HOME</TopLink></MenuItem>
                    <MenuItem><TopLink to='/posts'>FEED</TopLink></MenuItem>
                    <MenuItem><TopLink to='/request'>REQUEST</TopLink></MenuItem>
                    <MenuItem><TopLink to='/profile'>PROFILE</TopLink></MenuItem>
                    <MenuItem><ContactLink href='#contact'>CONTACT US</ContactLink></MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
