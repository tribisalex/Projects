import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import FindJob from "../../assets/image/FindJob.jpg";
import NotFindJob from "../../assets/image/NotFindJob.jpg";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src="https://goarctic.ru/upload/iblock/444/4445f76ff7261804dfc52f8531daa7a4.jpg" width="400"
                     alt="Text"/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large}/>
                    <span className={s.aboutMe}>
                        Немного обо мне: {props.profile.aboutMe}
                    </span>
                </div>
                <div className={s.jobFind}>
                    LookingForAJob: <img src={props.profile.lookingForAJob === true ? FindJob : NotFindJob}/>
                </div>
            </div>
        </div>
    )

}
export default ProfileInfo;