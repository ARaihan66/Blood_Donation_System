import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Nagigation/Navbar';
import Home from './Component/Home/Home';
import Feed from './Component/Feed/Feed';
import CreateRequest from "./Component/CreateRequest/CreateRequest";
import Login from "./Component/Login/Login";
import Signup from "./Component/Signup/Signup";
import Profile from "./Component/Profile/Profile"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/feeds' element={<Feed />} />
        <Route path='/request' element={<CreateRequest />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/request' element={<CreateRequest />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
