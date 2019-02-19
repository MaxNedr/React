import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import '../../styles.css';


export default class MessageField extends React.Component {
    state = {
        messages: ['Hello', 'Hi!'],
        input: '',
    };

    handleClick = () => {
        const { messages, input } = this.state;
        messages.push(input);
        this.setState({ messages, input: '' })
    };

    handleInput = (e) => {
        this.setState({ input: e.target.value })
    };

    render() {
        const messages = this.state.messages.map((message, index) => <Message key={ `${message}_${index}` } message={ message } />);

        return (
            <div style={ { backgroundColor: 'grey' } }>
                { messages }
                <input value={ this.state.input } onChange={ this.handleInput }/><br/>
                <button onClick={ this.handleClick }>Отправить</button>
            </div>
        )
    }
}