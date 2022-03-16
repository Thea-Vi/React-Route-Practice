import React from 'react'
import { useParams } from 'react-router-dom';

const HelloBlueRed = (props) => {

    // const{hello, blue, red} = useParams()
    const { blue, red } = useParams();
        


    return (
        <div>
            <h1 style={{ color: blue, backgroundColor: red }}>Word is : hello </h1>
        </div >
    )
}

export default HelloBlueRed;