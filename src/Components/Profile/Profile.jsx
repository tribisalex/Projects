import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.profilePage}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer store={props.profile} />
        </div>
    )
}
export default Profile;