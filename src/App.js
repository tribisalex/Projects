import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Dialogs />
        <Profile />
      </div>
      
      </div>
  )
}

export default App;
