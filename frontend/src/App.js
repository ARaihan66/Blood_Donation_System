import './App.css';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import PostsPage from './Pages/PostsPage';
import ProfilePage from './Pages/ProfilePage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import Registration from './Pages/RegistrationPage';
import Login from './Pages/LoginPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RequestPage from './Pages/RequestPage';
import ScrollToTop from "react-scroll-to-top";
import Feature from './Features/Feature';

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
`

function App() {
  return (
    <Container className='App'>
      <BrowserRouter>
        <Navbar />
        <Feature />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/posts' element={<PostsPage />} />
          <Route path='/request' element={<RequestPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>

        <section id='contact'>
          <ContactPage />
        </section>
        <ScrollToTop smooth />
      </BrowserRouter>
    </Container>
  );
}

export default App;
