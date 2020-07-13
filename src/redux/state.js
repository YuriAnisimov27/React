const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "it's my first post", like_count: 37 },
                { id: 2, message: 'Hello World!', like_count: 12 },
                { id: 3, message: 'Hi, how are you?', like_count: 40 },
            ],
            newPostText: 'super-text'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Vova' },
                { id: 3, name: 'Masha' },
                { id: 4, name: 'Igor' },
                { id: 5, name: 'Klava' },
                { id: 6, name: 'Jack' },
                { id: 7, name: 'Jhon' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hello World!' },
                { id: 3, message: 'BinPot)' },
                { id: 4, message: 'How is your name?' },
                { id: 5, message: 'How a u?' },
            ]
        }
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

    dispatch(action) { //описывает какое действие совершить { type: 'ADD-POST'... }
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like_count: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export default store;

window.store = store;