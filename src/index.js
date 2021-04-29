import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/board';

class Index extends React.Component{
    render(){
        return(<Board name='aa'/>);
    }C
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
  );