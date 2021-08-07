import React, { Component } from 'react'
import {nanoid} from 'nanoid' //nanodi return a function
import PropTypes from 'prop-types'  // limit 
import './index.css'

export default class Header extends Component {

    // 对接受的props进行类型和必要性的限制
    static propTypes = {
        addTodos: PropTypes.func.isRequired
    }

    // 键盘事件的回调
    handleKeyUp = (event) => {
        const { keyCode, target } = event  //结构附值
        if (keyCode !== 13) return  // 判断是否是回车按键, 13为回车键
        if(target.value.trim() === ''){   //trim: no white space
            alert('Input can not be white space')
            return //stop to run below code
        }
        // 准备好todo对象
        const todoObj = {id: nanoid(), name:target.value, done:false}  //nanoid() a unique id
        this.props.addTodos(todoObj)
        target.value = ''
    }

    render() {
        return (
            <div className='todo-header'>
                <input onKeyUp={this.handleKeyUp} type='text' placeholder='Input your task name, enter tab to comfirm'></input>
            </div>
        )
    }
}
