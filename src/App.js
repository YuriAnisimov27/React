import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";

const App = () => {

  return (
    <div className='app_wrapper'>
      <HeaderContainer />
      <Navbar/>
      <div className='app_wrapper_content'>
        <Route path='/dialogs'
               render={ () => <DialogsContainer /> }/>
        <Route path='/profile/:userId?'
               render={ () => <ProfileContainer /> }/>
        <Route path='/music' component={Music}/>
        <Route path='/news' component={News}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/users'
               render={ () => <UsersContainer /> }/>
      </div>
    </div>
  );
}

export default App;