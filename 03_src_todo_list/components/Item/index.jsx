import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = { mouse: false } // label for mouse enter or leave

    //鼠标移入移出的回调
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }

    }

    handelClick = (id) =>{
        return (event) => {
            this.props.updateTodos(id, event.target.checked)
        }

    }
    // 删除一个todo
    handleDelete = (id) => {
        return () => {
            if(window.confirm('Are you sure to delete?')){   // confirm框弹出，点确认返回true删除todo
                this.props.deleteTodos(id)
            }
        }

    }

    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
                onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type='checkbox' checked={done} onChange={this.handelClick(id)} />
                    <span> {name}</span>
                </label>
                <button onClick={this.handleDelete(id)} className='btn btn-danger' style={{ display: mouse ? 'block' : 'none' }}>Delete</button>
            </li>
        )
    }
}
