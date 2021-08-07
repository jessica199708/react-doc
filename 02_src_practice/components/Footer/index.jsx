import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    

    render() {
        
        return (
            <div className='todo-footer'>
                <label>
                    <input type='checkbox'/>
                </label>
                <span>
                    <span>Complete 0</span> / Total 2
                </span>
                <button className='btn btn-danger'>Clear the finished tasks</button>
            </div>
        )
    }
}
