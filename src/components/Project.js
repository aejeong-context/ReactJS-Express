import React from 'react';
import styled from 'styled-components';

const ItemBlock = styled.div`
    display : flex;
    .contents{
        h2{
            margin:0;
        }
    }

    `;

const Project = ({ project })=>{

    const{id,name,content,start_date,end_date} = project;
    return(
        <ItemBlock>
            <div className="contents"><p>{id}</p><h2>{name}</h2> <p>{content}</p> </div>
        </ItemBlock>
    );
};

export default Project;