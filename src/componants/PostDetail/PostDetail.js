import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])

    useEffect(() => {
        const url= `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [])

    useEffect(() =>{
        const url = `http://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then( data => setComment(data))
    } ,[])
    return (
        <div>
            <h1>This is post detail: {id}</h1>
            <h1>User Posted: {post.id} </h1>
            <h4> {post.title} </h4>
            <h5> {post.body} </h5>
            <hr/>
            <h4> Number of comments: {comment.length} </h4>
            {
                comment.map( comment => <Comment comment = {comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;