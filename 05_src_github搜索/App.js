import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
    state = {
        users:[], 
        isFirst: true, //是否为第一次打开该网页
        isLoading: false,
        err: '', // 存储请求相关的错误信息
    }
    updateAppState = (stateObj) =>{
        this.setState(stateObj)
    }
    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/> 
                {/* 批量传递 */}
            </div>
        )
    }

}

