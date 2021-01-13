import React from 'react';
// Parts
import { Header } from '../components/Header/Header';
import style from './App.module.scss';

export function App() {
    return (
        <main className={ style }>
            <Header />
        </main>
    )
}