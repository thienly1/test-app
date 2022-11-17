import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const ShowData =() =>{

    let params = useParams();

    const [id,setId] = useState(params.id);

    if(id==='0' || id===undefined){
        return(
            <Navigate replace to={'/error'} state={{message: 'Param is not valid'}}/>
        )
    }
    
    return(
        <>
        <h2>
            ID was: {id}
        </h2>
        </>

    )
    
  }

export default ShowData;