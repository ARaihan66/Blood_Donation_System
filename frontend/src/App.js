import './App.css';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import PostsPage from './Pages/PostsPage';
import ProfilePage from './Pages/ProfilePage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import Registration from './Pages/RegistrationPage';
import Login from './Pages/LoginPage';
import RequestPage from './Pages/RequestPage';
import ScrollToTop from "react-scroll-to-top";
import Feature from './Features/Feature';
import CreateOtp from './Pages/CreateOtp';
import ForgetPassword from './Pages/ForgetPassword';
import ResetPassword from './Pages/ResetPassword';
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
      <Feature />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Registration />} />
        <Route path="/create_otp" element={<CreateOtp />} />
        <Route path="/feeds" element={<PostsPage />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/forget_password" element={<ForgetPassword />} />
        <Route path="/reset_password" element={<ResetPassword />} />
      </Routes>

      <section id='contact'>
        <ContactPage />
      </section>
      <ScrollToTop smooth />
    </Container>
  );
}

export default App;
