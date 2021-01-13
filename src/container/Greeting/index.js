import React from 'react';
import UserGreeting from '../../components/UserGreeting'
import GuestGreeting from '../../components/GuestGreeting'

export default function Greeting( { isLogin }) {
   return isLogin ? <UserGreeting /> : <GuestGreeting />
}