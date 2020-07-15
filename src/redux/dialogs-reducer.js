const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ],
    newMessageBody: ''
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push( {id:6, message: body} );
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({ type:SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogReducer;
