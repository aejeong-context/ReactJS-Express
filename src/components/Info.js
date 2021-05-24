import React,{ useReducer, useEffect } from 'react';


function reducer(state,action){
    return{
        ...state,
        [action.name]: action.value
    };
}



const Info=()=>{
    const [state,dispatch] = useReducer(reducer,{
        name:'',
        job:0
    });
    const {name,job}=state;


    // userEffect는 기본적으로 렌더링 되고 난 직후마다 실행하지만
    // 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다.
    useEffect(()=>{
        console.log('effect');
        console.log(name);
        return () =>{
            console.log('cleanup');
            console.log(name);
        };
    },[name]);

    // const onChangeName = e =>{
    //     setName(e.target.value);
    // };
    // const onChangeAge = e =>{
    //     setAge(e.target.value);
    // };
    const onChange = e =>{
        dispatch(e.target);
    }

    return(
        <div>
            <div>
                <input name = "name" value={name} onChange={onChange}></input>
                <input name = "job" value={job} onChange={onChange}></input>


            </div>
            <div>
                <b>이름:{name}</b>
                <b>나이:{job}</b>
            </div>


        </div>
    )

}

export default Info;