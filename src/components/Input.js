import React from 'react'
import {useParams} from 'react-router-dom'


const Input = (props) => {
    const {x,color1,color2} = useParams();

return (
    <div>
        {
        isNaN(x)?
        <h2 style={
            color1?
            {color:color1,backgroundColor:color2}
            :null}>
            The Word is {`${x}`}</h2>
        :
        <h2 style={{color:"orange"}}>The Number is {`${x}`}</h2>
        }
    </div>
)
}

export default Input