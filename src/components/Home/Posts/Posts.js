import React from 'react';

const Posts = (props) => {
        const {title, body} =props.post;
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Posts;