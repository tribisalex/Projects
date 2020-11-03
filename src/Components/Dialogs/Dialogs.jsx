import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from "./Dialogs.module.css";
import Answer from './Answer/Answer';
import {sendMailActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

  let state = props.dialogsPage;

    let dialogElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = state.messages.map(m => <Message message={m.message}/>);
    let answerElement = state.answers.map(an => <Answer answer={an.answer}/>);
    let newMassageBody = state.newMessageBody;

    let sendMail = () => {
        props.sendMessage();
    }

    let updateNewMessageText = (e) => {
        let body = e.target.value;
      props.updateNewMessageText(body);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems + ' ' + s.active}>
                    {dialogElement}
                </div>
                <div className={s.messages}>
                    {messageElement}
                    <div><textarea
                        value={newMassageBody}
                        placeholder = 'Enter your message'
                        onChange={updateNewMessageText}
                    />
                </div>
                <div>
                    <div>
                        <button onClick={sendMail}>Send Mail</button>
                    </div>
                </div>
            </div>

            <div className={s.answer}>
                {answerElement}
            </div>
        </div>
</div>
)
}

export default Dialogs;