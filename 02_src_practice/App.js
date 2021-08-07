import React, { Component } from 'react';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css';
// App.js is normal javascript file which has JSX code inside render function. 
// The name App is user-defined you can keep any name but remember to save as .js file.

// 状态在哪里，操作状态的方法就在哪里

export default class App extends React.Component {


    render() {
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header />
                    <List />
                    <Footer/>
                </div>
            </div>
        )
    }

}
