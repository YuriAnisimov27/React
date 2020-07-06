import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
    { id: 1, post: "it's my first post", like_count: 37 },
    { id: 2, post: 'Hello World!', like_count: 12 },
    { id: 3, post: 'Hi, how are you?', like_count: 40 },
];

let dialogs = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Vova' },
    { id: 3, name: 'Masha' },
    { id: 4, name: 'Igor' },
    { id: 5, name: 'Klava' },
    { id: 6, name: 'Jack' },
    { id: 7, name: 'Jhon' }
];

let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello World!' },
    { id: 3, message: 'BinPot)' },
    { id: 4, message: 'How is your name?' },
    { id: 5, message: 'How a u?' },
];


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
