import React from 'react';
import s from './Navbar.module.css';

const NavBar = () => {
    return <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            <a href="/Profile">Profile</a>
        </div>
        <div className={s.item}>
            <a href="/Dialogs">Messages</a>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>
}
export default NavBar;