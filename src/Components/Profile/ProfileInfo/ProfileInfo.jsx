import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://goarctic.ru/upload/iblock/444/4445f76ff7261804dfc52f8531daa7a4.jpg" width="400" alt="Text" />
            </div>
            <div className={s.descriptionBlock}>
                Ava + Decription
            </div>
        </div>
    )

}
export default ProfileInfo;