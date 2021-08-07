import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
    state = {
        users: [],
        isFirst: true, //是否为第一次打开该网页
        isLoading: false,
        err: '', // 存储请求相关的错误信息
    }
    // 组件一挂载就订阅消息 谁接东西就订阅
    componentDidMount(){
        this.token = PubSub.subscribe('Message', (_, stateObj)=>{
            this.setState(stateObj)
        })
    }
    //取消订阅
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        const { users, isFirst, isLoading, err } = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>Input user name and click search</h2> :  //三元表达式做判断
                        isLoading ? <h2>Loading...</h2> :
                            err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                                users.map((userObj) => {
                                    return (
                                        <div key={userObj.id} className="card">
                                            <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                                <img alt="icon" src={userObj.avatar_url} style={{ width: '100px' }} />
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>

                                    )
                                })
                }
            </div>

        )
    }
}
