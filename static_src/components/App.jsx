import React from 'react';
import '../style.css';
import MessageField from './MessageField';


export default class App extends React.Component {
    componentDidMount () {
        console.log('It works!');
    }

    render() {
        return (<MessageField />)
    }
}