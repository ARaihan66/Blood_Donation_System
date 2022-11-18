import styled from 'styled-components';
import { CiSearch } from 'react-icons/ci'

const Container = styled.div`

`

const Wrapper = styled.div`
display: flex;
`
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: center;
`
const Logo = styled.h1`

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
const SearchInput = styled.input`
flex: 4;
border: none;
width: 80%;
height: 40px;
padding-left: 15px;
font-size:18px;
`
const SearchIcon = styled.span`
margin: 0px 10px;
display: flex;
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
                    <Logo>BLOOD CEIL</Logo>
                </Left>
                <Center>
                    <SearchContainer>
                        <SearchInput placeholder='Search' />
                        <SearchIcon>
                            <CiSearch />
                        </SearchIcon>
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuItem>HOME</MenuItem>
                    <MenuItem>FEED</MenuItem>
                    <MenuItem>REQUEST</MenuItem>
                    <MenuItem>ABOUT</MenuItem>
                    <MenuItem>PROFILE</MenuItem>
                    <MenuItem>CONTACT</MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
