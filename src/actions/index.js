import {SET_COLOR} from '/ActionType';

// 액션 생성자 - 함수, 리턴 - 객체


export function setColor(color){
    return(
        type: SET_COLOR,
        color
    );

}
