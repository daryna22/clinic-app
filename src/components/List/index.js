import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// Style
import style from './List.module.scss'
import care from './Img/care.png'

export default function List(props) {
    const { array } = props;
    const Clinics = array.map((item) => {
        const { name, phone, address, content } = item;
        return (
        <li className={style.contents} key={uuidv4()} >
            <div className={style.head}><img src={care} alt="Изображение клиники" className={style.photo} />
               <div className={style.clinic_name}>
                   <h1>{name}</h1>
                   <span className={style.adres}>
                       <em>{address}</em></span></div></div>
            <p>{content}</p>
            <div className={style.contact}>
                <span className={style.phone}><b>Наш номер: {phone}</b></span>
                <button className={style.call}>Заказать звонок</button></div>
        </li>)
    } )
    return (
        <ul className={style.clinics}>
            {Clinics}
        </ul>
    )
}