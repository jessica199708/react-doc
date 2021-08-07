import axios from 'axios'
import React, { Component } from 'react'

export default class App extends Component {
    getStudentData = () => {
        // 如果3000下没有数据，就从让请求走api1所配置的代理5000
        axios.get('http://localhost:3000/api1/students').then(
            response => { console.log('Success', response.data) },
            error => { console.log('Failure', error) }
        )
    }
    getCarData = () => {
        axios.get('http://localhost:3000/api2/cars').then(
            response => { console.log('Success', response.data) },
            error => { console.log('Failure', error) }
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>Click to get Student data</button>
                <button onClick={this.getCarData}>Click to get Car data</button>
            </div>
        )
    }
}

