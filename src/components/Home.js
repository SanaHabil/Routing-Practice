import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

return (
    <div> 
        <h2 style={{color:"red"}}> Welcome Home </h2>
        <Link to={"/about"}> </Link>
    </div>
)
}

export default Home