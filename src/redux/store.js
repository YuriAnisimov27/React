import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "it's my first post", like_count: 37},
        {id: 2, message: 'Hello World!', like_count: 12},
        {id: 3, message: 'Hi, how are you?', like_count: 40},
      ],
      newPostText: 'super-text'
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Vova'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Igor'},
        {id: 5, name: 'Klava'},
        {id: 6, name: 'Jack'},
        {id: 7, name: 'Jhon'}
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello World!'},
        {id: 3, message: 'BinPot)'},
        {id: 4, message: 'How is your name?'},
        {id: 5, message: 'How a u?'},
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    alert('something wrong(');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //Observer pattern
  },

  dispatch(action) { // описывает какое действие совершить { type: 'ADD-POST'... }

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;

window.store = store;
