import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: 'Message01' },
            { id: '02', title: 'Message02' },
            { id: '03', title: 'Message03' }
        ]
    }
    replaceShow = (id, title) => {
        // 跳转到Detail组件，且为replace跳转
        // params参数
        this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // search参数
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

        // state参数
        // this.props.history.replace(`/home/message/detail`, { id, title })

    }
    pushShow = (id, title) => {
        // 跳转到Detail组件，且为push跳转
        this.props.history.push(`/home/message/detail/${id}/${title}`)
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
        // this.props.history.push(`/home/message/detail`, { id, title })
    }
    // back = () => {
    //     this.props.history.goBack()
    // }
    // forward = () => {
    //     this.props.history.goForward()
    // }
    // go = () => {
    //     // 往前n步，负数是后退n步
    //     this.props.history.go(2)
    // }
    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递params参数 */}
                                    <Link to={`/ home / message / detail / ${msgObj.id} / ${msgObj.title}`}>{msgObj.title}</Link>

                                    {/* 向路由组件传递search参数 */}
                                    {/* <Link to={`/ home / message / detail /? id = ${ msgObj.id } & title=${ msgObj.title }`}>{msgObj.title}</Link> */}

                                    {/* 向路由组件传递state参数 */}
                                    {/* <Link to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }} >{msgObj.title}</Link> */}

                                    <button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>Push</button>
                                    <button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>Replace</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 声明接收params参数 */}
                <Route path='/home/message/detail/:id/:title' component={Detail} />

                {/* search参数无需声明接收，正常注册路由即可*/}
                {/* <Route path='/home/message/detail' component={Detail} /> */}

                {/* state参数无需声明接收，正常注册路由即可*/}
                {/* <Route path='/home/message/detail' component={Detail} /> */}
                {/* <button onClick={this.back}>Back</button>
                <button onClick={this.forward}>Forward</button>
                <button onClick={this.go}>Go</button> */}
            </div>
        )
    }
}
