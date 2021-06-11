import React, { useEffect, useState } from 'react';

const Home = () => {
    const [post, setPost] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h1>This is home</h1>

        </div>
    );
};

export default Home;