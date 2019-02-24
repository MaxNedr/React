import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Message from './Message';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SendIcon from 'material-ui/svg-icons/content/send';
import '../styles/messages.sass';

export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.string.isRequired,
    };

    state = {
        curId: 1,
        messageList: {1: [], 2: [], 3: [], 4: [], 5: []},
        messages: {},
        input: '',
    };

    componentDidUpdate(prevProps, prevState) {
        const { chatId } = this.props;
        const messageList = this.state.messageLists[chatId];
        const lastMessageId = messageList[messageList.length - 1];
        const lastMessageSender = this.state.messages[lastMessageId] ?  this.state.messages[lastMessageId].sender : '';

        if (prevState.messageLists[chatId].length < messageList.length && lastMessageSender === 'me') {
            console.log('update');
            setTimeout(() => this.handleReplyMessage(), 2000);
        }
    };

    handleSendMessage = (e) => {
        const { chatId } = this.props;
        const { messages, curId, input, messageLists } = this.state;
        const messageList = [...messageLists[chatId], curId];
        const newMessageLists = Object.assign({}, messageLists, { [chatId]: messageList });
        messages[curId] = { sender: 'me', message: input, chatId };
        this.setState({ messageLists: newMessageLists, messages, input: '', curId: curId + 1 });
    };

    handleReplyMessage = () => {
        const { chatId } = this.props;
        const { messages, curId, input, messageLists } = this.state;
        const messageList = [...messageLists[chatId], curId];
        const newMessageLists = Object.assign({}, messageLists, { [chatId]: messageList });
        const newMessages = Object.assign(
            {}, messages, {[curId]: { sender: 'bot', message: 'Отстаньте, от меня, кожаные убл*дки', chatId: chatId }});
        this.setState({ messageLists: newMessageLists, messages: newMessages, input: '', curId: curId + 1 });
    };

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    render() {
        const messages = this.state.messageLists[this.props.chatId].map((messageId, index) =>
            <Message
                key={ `${messageId}_${index}` }
                message={ this.state.messages[messageId].message }
                sender={ this.state.messages[messageId].sender }
            />);

        return (
            <div>
                {this.state.messages.length === 0 &&
                <div style={ { opacity: 0.5 } }>Пока нет ни одного сообщения</div>}
                <div className="message-field">
                    { messages }
                </div>
                <TextField hintText="Сообщение" name="input" value={ this.state.input } onChange={ this.handleInput } />
                <FloatingActionButton onClick={ this.handleSendMessage }>
                    <SendIcon />
                </FloatingActionButton>
            </div>

        )
    }
}