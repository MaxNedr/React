import React from 'react';
import PropTypes from 'prop-types';
import '../../styles.css';

export default class Message extends React.Component {
    static propTypes = {
        message: PropTypes.string,
    };

    static defaultProps = {
        message: 'Привет!',
    };

    render() {
        return (<div style={ { backgroundColor: 'yellow' } }>{ this.props.message }</div>)
    }
}