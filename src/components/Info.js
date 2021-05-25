import axios from 'axios';
import React,{ useReducer, useEffect, useState } from 'react';


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

    const [users, setUsers] = useState(null);


    // userEffect는 기본적으로 렌더링 되고 난 직후마다 실행하지만
    // 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다.
    useEffect(()=>{
        const fetchUsers = async () =>{
            try{
                const response = await axios.get('/project/3');
                setUsers(response.data);
                console.info(response.data);
            }catch(e){
                console.info(e.name);
            }
        };
        fetchUsers();
    },[]);

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
                {/* {users.name} */}
                {JSON.stringify(users,null,2)}
            </div>
        </div>
    )

}

export default Info;