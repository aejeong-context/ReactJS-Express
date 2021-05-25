import React from 'react';
import styled from 'styled-components';

const categories=[
    {
        name:'all',
        text:'전체보기'
    },
    {
        name:'business',
        text:'비지니스'
    }
    
];

const CategoriesBlock=styled.div`
    display:flex;
    padding:1rem;
    width:768px;
    margin: 0 auto;
    @media screen and (max-width:768px){
        width:100%;
        overflow-x:auto;
    }
`;

const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoreation: none;
    color: inherit;
    padding-bottom: 0.25rem;
    &:hover {
        color: #595057;
    }
    & + &{
        margin-left:1rem;
    }

`;

const Categories=()=>{
    return(
        <CategoriesBlock>
            {categories.map(c=>(
                <Category key={c.name}>{c.text}</Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;