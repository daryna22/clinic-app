import React, { Component } from 'react';

// parts
import Greeting from '../../container/Greeting'
import LoginAndLogoutButton from "../LoginAndLogoutButton";

// Style
import style from './Header.module.scss'
import logo from './Img/logo.png'
import arrow from './Img/arrow.png'

export class Header extends Component {
    constructor(props) {
        super(props);
        this.loginClick = this.handleLoginClick.bind(this);
        this.logoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false }
    }
    handleLoginClick() {
        this.setState( { isLoggedIn: true })
    }
    handleLogoutClick() {
        this.setState( { isLoggedIn: false })
    }
    render() {
        const { isLoggedIn } = this.state;

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

                        <span className={style.login}>
                            <Greeting isLogin={isLoggedIn} />
                            {isLoggedIn ? <LoginAndLogoutButton text={'Выйти'} onClick = {this.logoutClick} />
                            : <LoginAndLogoutButton text={'Войти'} onClick = {this.loginClick} />}
                        </span>

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
