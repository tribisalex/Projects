import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return <div>
            <div>
                <img src="https://goarctic.ru/upload/iblock/444/4445f76ff7261804dfc52f8531daa7a4.jpg" width="600" />
            </div>
            <div>
                Ava + Decription
    </div>
            <MyPosts />
        </div >
}
export default Profile;