import React, { Component } from 'react'
import MyNavLink from '../../component/MyNavLink'
import { Redirect, Route, Switch } from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>Home content</h3>
                <div>
                    <ul className="nav nav-tabs">
                        {/* 编写路由链接 */}
                        <li>
                            <MyNavLink to='/home/news'>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/home/message'>Message</MyNavLink>
                        </li>
                    </ul>
                    {/* 注册二级路由 */}
                    <Switch>
                        <Route path='/home/news' component={News}/>
                        <Route path='/home/message' component={Message} />
                        <Redirect to='/home/news'/>
                    </Switch>

                </div>
            </div>

        )
    }
}
