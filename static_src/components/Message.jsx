import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';

export default class Message extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
    };

    render() {
        return (<Chip className={ this.props.sender=== 'bot' ? 'bot' : 'user'}>{ this.props.message }</Chip>)
    }
}