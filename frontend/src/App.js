import './App.css';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import Posts from './Pages/PostsPage';
import ProfilePage from './Pages/ProfilePage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import Registration from './Pages/RegistrationPage';
import Login from './Pages/LoginPage';
import { Routes, Route } from 'react-router-dom';

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
`

function App() {
  return (
    <Container className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/contact' element={<ContactPage />} />

      </Routes>

    </Container>
  );
}

export default App;
