import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {addPost} from "./redux/state";


const App = (props) => {

    return (
      <BrowserRouter>
          <div className='app_wrapper'>
              <Header />
              <Navbar />
              <div className='app_wrapper_content'>
                  <Route path='/dialogs'
                         render={ () => <Dialogs state={props.state.dialogsPage} /> } />
                  <Route path='/profile'
                         render={ () => <Profile
                             profilePage={props.state.profilePage}
                             updateNewPostText={props.updateNewPostText}
                             addPost={props.addPost} /> } />
                  <Route path='/music' component={Music} />
                  <Route path='/news' component={News} />
                  <Route path='/settings' component={Settings} />
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
