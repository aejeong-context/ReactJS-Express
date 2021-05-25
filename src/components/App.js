import React,{ useState } from 'react';
//import LifeCycleSample from './LifeCycleSample';
//import ErrorBoundary from './ErrorBoundary';
// import Contact from './Contact';

// class App extends React.Component {
//     render(){
//         return (
//                 <Contact/>
//         );
//     }
// }

// state의 color값을 랜덤 색상으로 설정한다.
// function getRendomColor(){
//     return '#'+Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component{
//     state={
//         color:'#000000'
//     }
//     handleClick=()=>{
//         this.setState({
//             color:getRendomColor()
//         });
//     }

//     render(){
//         return(
//             <div>
                
//                 <ErrorBoundary>
//                 <button onClick={this.handleClick}>랜덤 색상</button>
//                 <LifeCycleSample color={this.state.color}></LifeCycleSample>
//                 </ErrorBoundary>
//             </div>
//         );
//     }
// }

// import Counter from './Counter';
import Info from './Info'; 
import ProjectList from './ProjectList';


const App =()=>{
    const[visible, setVisible] = useState(false);

    return (
    <div>
        <ProjectList />
        <button onClick={()=>{
        setVisible(!visible);
    }}>{visible ? '숨기기': '보이기'}</button>
    <hr />
    {visible && <Info />}
    </div>
    )
};


export default App;