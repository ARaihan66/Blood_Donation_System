import './App.css';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import Posts from './Pages/PostsPage';
import ProfilePage from './Pages/ProfilePage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
  /* background-color: black; */
`

function App() {
  return (
    <Container className='App'>
      {/* <Navbar /> */}
      {/* <Posts />
      <ProfilePage />
      <ContactPage /> */}
      <HomePage />
    </Container>

  );
}

export default App;
