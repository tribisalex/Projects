import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div>
                MyPosts
      <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                    <button>Remove</button>
      </div>
            </div>
        <Post message='Hi, how are you?' />
        <Post message="It's my first post"/>
                    </div>
    )
}
export default MyPosts;