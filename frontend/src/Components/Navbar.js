import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci';
import BloodDrop from '../Logo/BloodDrop.png';

const Container = styled.div`
margin: 0px 0px;
background-color: #0d0d0d;
color: white;
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
`
const Select = styled.select`
flex: 4;
border: none;
width: 80%;
height: 40px;
color: white;
padding-left: 15px;
font-size:18px;
border: none;
background-color: #0d0d0d;
`
const Option = styled.option`
opacity: ${props => props.type};
background-color: #0d0d0d;
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
                    <MenuItem>HOME</MenuItem>
                    <MenuItem>FEED</MenuItem>
                    <MenuItem>REQUEST</MenuItem>
                    <MenuItem>CONTACT US</MenuItem>
                    <MenuItem>ACCOUNT</MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
