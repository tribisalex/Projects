const SEND_MAIL = 'SEND-MAIL';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Nadya'},
        {id: 2, name: 'Olya'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Eva'},
        {id: 5, name: 'Volodya'},
        {id: 6, name: 'Lena'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'Hello'},
        {id: 1, message: 'Yo'},
        {id: 1, message: 'Chik'},
        {id: 1, message: 'Chirik'}
    ],
    newMessageBody: '',
    answers: [
        {id: 1, answer: '1232443'},
        {id: 1, answer: 'ghjghkjf'},
        {id: 1, answer: 'Jlkjllkj'},
        {id: 1, answer: 'llgjfk'},
        {id: 1, answer: 'Chirik'}
    ]
}

const dialogsReducer = (state=initialState, action) => {

    switch (action.type) {
        case SEND_MAIL:
            let body = state.newMessageBody;
            state.messages.push({id: 6, message: body});
            state.newMessageBody = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}

export const sendMailActionCreator = () => ({type: SEND_MAIL})

export const updateNewMessageTextActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body})


export default dialogsReducer;