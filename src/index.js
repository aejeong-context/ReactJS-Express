import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
// reducers를 합쳐놓은 index 가지고옴
import reducers from './reducers/index'

import { Provider } from 'react-redux'

// 스토어 생성 -> 애플리케이션 오직 1개
// dispatch(action) -> action을 reducers에 전달
// getState() -> 현재 상태 반환
// subscribe -> 상태가 바뀔 때마다 실행할 함수를 등록
const store = createStore(reducers);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));