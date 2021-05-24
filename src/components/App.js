import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
// import Contact from './Contact';

// class App extends React.Component {
//     render(){
//         return (
//                 <Contact/>
//         );
//     }
// }

// state의 color값을 랜덤 색상으로 설정한다.
function getRendomColor(){
    return '#'+Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component{
    state={
        color:'#000000'
    }
    handleClick=()=>{
        this.setState({
            color:getRendomColor()
        });
    }

    render(){
        return(
            <div>
                
                <ErrorBoundary>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <LifeCycleSample color={this.state.color}></LifeCycleSample>
                </ErrorBoundary>
            </div>
        );
    }
}


export default App;