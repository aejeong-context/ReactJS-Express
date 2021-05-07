import React from 'react';
import Board from './board';
import Contect from './Contect';
import { hot } from 'react-hot-loader';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={name:'aejoeng'}

    };

    render(){
        return(
            <div>
         <Board name={this.state.name}/>
        <button onClick={()=> {this.setState({name:'jisu'});}}>Click me!</button>
        <h1> Hello!!!!!{this.state.name}</h1>
        <Contect />
        </div>
         );
    }
}

export default hot(module) (App);