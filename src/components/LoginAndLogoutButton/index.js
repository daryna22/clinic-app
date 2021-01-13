import React from 'react';

// Style
import style from '../Header/Header.module.scss'

export default function LoginAndLogoutButton(props) {
    const { onClick, text} = props;
    return (
        <button onClick={onClick} className={style.button}>
            {text}
        </button>
    )
}