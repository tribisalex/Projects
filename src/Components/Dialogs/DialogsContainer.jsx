import React from 'react';
import {sendMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewMessageText: (body) => {
//             dispatch(updateNewMessageTextActionCreator(body))
//         },
//         sendMessage: () => (dispatch(sendMailActionCreator()))
//     }
// }

const dialogsContainer = connect (mapStateToProps, {updateNewMessageText, sendMessage})(Dialogs);

export default dialogsContainer;