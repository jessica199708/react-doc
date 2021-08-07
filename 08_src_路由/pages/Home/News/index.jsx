import React, { Component } from 'react'

export default class News extends Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/home/message')
    //     }, 2000)
    // }
    render() {
        return (
            <div>
                {/* <ul class="nav nav-tabs">
                    <li>
                        <a class="list-group-item active" href="./home-news.html">News</a>
                    </li>
                    <li>
                        <a class="list-group-item " href="./home-message.html">Message</a>
                    </li>
                </ul> */}
                <ul>
                    <li>news001</li>
                    <li>news002</li>
                    <li>news003</li>
                </ul>
            </div>
        )
    }
}
