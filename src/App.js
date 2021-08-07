import React, { Component } from 'react'
import { Button } from 'antd'
import { StepBackwardOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <Button type='ghost'>Click</Button>
                <StepBackwardOutlined />
            </div>
        )
    }
}

