import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
// 封装 NavLink
// NavLink 可以实现路由的高亮，通过activeClassName制定样式名字
// 标签题内容是一个特殊的属性，通过this.props.children 可以获得标签体内容
export default class MyNavLink extends Component {
    render() {
        // const {to, title} = this.props
        return (
            // <NavLink activeClassName='changeColor' className='list-group-item' to={to}>{title}</NavLink>
            // {...props} 批量传递props
            <NavLink activeClassName='changeColor' className='list-group-item' {...this.props}/>
        )
    }
}
