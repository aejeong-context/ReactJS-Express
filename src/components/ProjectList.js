import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Project from './Project';

const ListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    `;


const ProjectList=()=>{
    const [project,setProject] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await axios.get('/project/3');
                setProject(response.data.project);
            }catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();

    },[]);

    if(loading){
        return <ListBlock>대기 중 ... </ListBlock>
    }
    if(!project){
        return null;
    }

    return(
        <ListBlock>
            {/* {project.map(pro=>( */}
                <Project key={project.id} project={project}/>
            {/* ))} */}
            
        </ListBlock>
    );
};
export default ProjectList;