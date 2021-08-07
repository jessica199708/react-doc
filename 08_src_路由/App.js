import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import Home from './pages/Home' //路由组件
import About from './pages/About'
import Header from './component/Header' //一般组件
import MyNavLink from './component/MyNavLink'
import './App.css'

export default class App extends Component {
    // 1. 点击导航连接引起路径变化
    // 2. 路径的变化被前端路由器监测到，进行匹配组件，从而展示

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生html中靠 a 标签跳转不同的页面 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a> */}

                            {/* 在React中靠路由链接实现切换组件 -- 编写路由链接 导航区*/}
                            {/* <NavLink activeClassName='changeColor' className='list-group-item' to='/about'>About</NavLink>
                            <NavLink activeClassName='changeColor' className='list-group-item' to='/home'>Home</NavLink> 
                            <NavLink activeClassName='changeColor' className='list-group-item' to='/home'children='Home'/> */}
                            {/* NavLink 点谁给谁加activeClassName属性，标签题内容存在children里 */}
                            <MyNavLink to='/about'>About</MyNavLink>
                            <MyNavLink to='/home'>Home</MyNavLink>
        

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 展示区写Route标签进行路径匹配,注册多个路由用Switch包住,提高路由的匹配效率 */}
                                <Switch>
                                    {/* 默认模糊匹配，exact为精准匹配 */}
                                    <Route exact={true} path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                    {/* 跟谁都匹配不上走redirect,写在所有路由的最下方*/}
                                    <Redirect to="/about"/>
                                </Switch>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

