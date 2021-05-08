
import React,{ useEffect, useState } from 'react';



function Board(props){

    const [phone,setPhone] = useState(0);
    useEffect(()=>{
      document.title=`aejeong phone number is ${phone}`;
  });

  function handlerButton(){
        alert(phone);
        setPhone('비밀이야');
    };

    return(
      
    <div>
        애정이의 폰넘버가 궁금해요? 
        <p>{props.name}는 궁금해여?</p>
        <button onClick={()=>handlerButton()}>눌러보세요!</button>

        </div>);
}




export default Board;