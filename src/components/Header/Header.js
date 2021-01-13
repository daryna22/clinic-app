import React, { Component } from 'react';

// Style
import style from './Header.module.scss';
import logo from '../img/logo.png';
import arrow from '../img/arrow.png';

export class Header extends Component {
    render() {
        return (
            <header className={style.main}>
                <div className={style.head}>
                    <figure className={style.logotype}><img src={logo} alt="Логотип" />
                        <figcaption className={style.head__name}> Единый центр записи</figcaption>
                    </figure>
                    <div className={style.head__menu} role="navigation">
                        <div className={style.head__phone} aria-label="Номер телефона">
                            <div className={style.bg_phone} />
                            <h1><b> 80300 5000</b></h1></div>
                        <ul className={style.head__navigation} aria-label="Главное меню" role="menubar">
                            <li className={style.head__item}><a href="https://stackoverflow.com"><b>Главная</b></a></li>
                            <li className={style.head__item}><a href="https://stackoverflow.com"><b>Услуги</b></a><img src={arrow} alt='/' /></li>
                            <li className={style.head__item}><a href="https://stackoverflow.com"><b>Клиники и кабинеты</b></a></li>
                            <li className={style.head__item}><a href="https://stackoverflow.com"><b>О нас</b></a></li>
                            <li className={style.head__item}><a href="https://stackoverflow.com"><b>Статьи</b></a></li>
                            <li className={style.head__item}><a href="https://stackoverflow.com"><b>FAQ</b></a></li>
                            <li className={style.head__item}><a href="https://stackoverflow.com"><b>Контакты</b></a></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}
