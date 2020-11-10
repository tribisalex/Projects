import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import {BrowserRouter, Route} from 'react-router-dom';
import Setting from './Components/Setting/Setting';
import Music from './Components/Music/Music';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/usersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/Profile/:userId'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/Users'
                           render={() => <UsersContainer />}/>
                    <Route path='/News'
                           component={News}/>
                    <Route path='/Music'
                           component={Music}/>
                    <Route path='/Setting'
                           component={Setting}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
