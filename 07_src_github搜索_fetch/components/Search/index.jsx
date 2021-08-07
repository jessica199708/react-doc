import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
    search = async () => {
        // const {keyWordElement} = this
        const { keyWordElement: { value: keyWord } } = this //连续结构赋值+重命名 obj = {a:{b:1}}   {a:{b:data}} = obj
        // //发送请求前通知App更新状态  谁想传东西就发布消息
        PubSub.publish('Message', { isFirst: false, isLoading: true })
        // // this.props.updateAppState({ isFirst: false, isLoading: true })
        // // 发送网络请求 axios发送
        // axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
        //     response => {
        //         //请求成功后通知App更新状态
        //         PubSub.publish('Message', { isLoading: false, usres: response.data.items })
        //         // this.props.updateAppState({ isLoading: false, usres: response.data.items }) // users information
        //     },
        //     error => {
        //         PubSub.publish('Message', { isLoading: false, err: error.message })
        //         // this.props.updateAppState({ isLoading: false, err: error.message })
        //     }
        // )
        // // 发送网络请求 fetch发送  关注分离 没有一次性得到数据
        try {
            const response = await fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`)  //接受响应
            const data = await response.json()
            PubSub.publish('Message', { isLoading: false, usres: data.items })
        } catch (error) {
            console.log('请求出错', error)
            PubSub.publish('Message', { isLoading: false, err: error.message })
        }


        // fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
        //     response => {
        //         //联系服务器成功
        //         return response.json()
        //     },
        //     // error => {
        //     //     console.log('联系服务器失败', error)
        //     //     return new Promise(() => { }) //停止往下走
        //     // }
        // ).then(
        //     response => { console.log('获取数据成功', response) },
        //     // error => { console.log('获取数据失败'), error }

        // ).catch(
        //     (error) => console.log('请求出错', error)
        // )


    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>

            </div>
        )
    }
}
