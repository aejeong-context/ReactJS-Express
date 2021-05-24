import React, { Component } from 'react';

class LifeCycleSample extends Component{
    state={
        error:false,
        number:0,
        color:null,
    }

myRef = null;

// 컴포넌트를 만들 때 처음으로 실행된다.
// 초기 state를 정한다.
constructor(props){

    super(props);
    console.log('constructor');
}

// props로 받아 온 값을 state에 동기화시키는 용도
// 컴포넌트가 마운트될 때, 업데이트될 때 호출
static getDerivedStateFromProps(nextProps,prevState){
    console.log('getDerivedStateFromProps');
    if(nextProps !== prevState){
        return{
            color:nextProps.color
        };
    }
    // 기본 state를 변경할 필요가 없을 때 null 반환
    return null;
}
// 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행
// js라이브러리 or 프레임워크의 함수 호출 or 이벤트 등록
// setTimeout, setInterval, 네트워크 요청 같은 비동기 작업 처리
componentDidMount(){
    console.log('componentDidMount');
}

// props or state 를 변경했을 때 리렌더링을 시작할지 여부를 지정하는 메서드
// 반환 true/false 
// 메서드 생성 없을시 기본 반환값 true
// false를 반환하면 업데이트 과정은 여기서 중지
// this.props, this.state로 접근하고 새로 생성될 nextProp, nextState로 접근 가능
// 업데이트 성능을 개선
shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate',nextProps,nextState);
    return nextState.number % 10 !==4;
}

// DOM에서 제거할 때 실행 ComponentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 해야 함
componentWillUnmount(){
    console.log('componentWillUnmount');
}

handleClick= () => {
    this.setState({
        number:this.state.number+1
    });
}

// render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전 호출
// 이 메서드의 반환값은 componentDidUpdate에서 세번째 파라미터인 snapshot 값으로 전달받는데 
// 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용 (예: 스크룰바 위치 유지)
getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBeforeUpdate');
    if(prevProps !== this.props.color){
        return this.myRef.style.color;
    }
    return null;
}
// 리렌더링 완료한 후 실행, 업데이트가 끝난 직후 -> DOM관련 처리 해도 무방
// prevProps, prevState를 사용해 이전에 가졌던 데이터에 접근
// getSnapshotBeforeUpdate의 반환값이 있다면 snapshot 값 전달받을 수 있음 
componentDidUpdate(prevProps,prevState,snapshot){
    console.log('componentDidUpdate',prevProps,prevState);
    if(snapshot){
        console.log('업데이트되기 직전 색상:', snapshot);
    }
}

// 에러 생겼을 때 실행
// componentDidCatch(erro,info){
//     this.setState({
//         error:true
//     });
//     console.log({erro,info});

// }

// 컴포넌트 모양새를 정의한다.
// props,state에 접근하여 리액트 요소를 반환한다.
// 아무것도 보여주고 싶지 않을 때 null or false 
// setState 사용 금지, 브라우저DOM 접근 금지 -> componentDidMount에서 처리한다.
    render(){
        console.log('render');

        const style={
            color:this.props.color
        };

        return(
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref => this.myRef=ref}>{this.state.number}</h1>
                <p>color:{this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )
    }
}

export default LifeCycleSample;