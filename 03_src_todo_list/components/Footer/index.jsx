import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    //全选check的回调
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }
    // 清除所有已完成的回调
    handleClearAllDone = () =>{
        this.props.clearAllDone()
    }

    render() {
        const { todos } = this.props
        const doneCount = todos.reduce((pre, current) => { return pre + (current.done ? 1 : 0) }, 0)  //pre: 上一次调用的返回值   current：每个todo
        const total = todos.length
        return (
            <div className='todo-footer'>
                <label>
                    <input type='checkbox' onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} />
                </label>
                <span>
                    <span>Complete {doneCount}</span> / Total {total}
                </span>
                <button onClick={this.handleClearAllDone} className='btn btn-danger'>Clear the finished tasks</button>
            </div>
        )
    }
}
