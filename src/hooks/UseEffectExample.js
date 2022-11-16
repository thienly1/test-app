import React, {useEffect, useState} from 'react';

const UseEffectExample = () => {

    const [dateTime, setDateTime] = useState("Default value");
    const [reload, setReload] = useState(false);
    useEffect(() => {
        console.log("Use Effect triggered")
        const currentDate= new Date();
        setDateTime(currentDate.toString());
    }, [reload])

    const updateDateHandler = ()=>{
        setReload(true)
    }
    return (
        <div className="container">
            <h3>useEffect hook function example</h3>
            <div className="alert alert-info">
                {dateTime}
            </div>
            <div className="row">
                <div className="col">
                    <button type="button" className='btn btn-info' onClick={updateDateHandler} >Update Date</button>
                </div>
            </div>
        </div>
    );
};

export default UseEffectExample;