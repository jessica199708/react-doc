import React, { Component } from 'react'
// import qs from 'querystring'

const detailData = [
    { id: '01', content: 'm01' },
    { id: '02', content: 'm02' },
    { id: '03', content: 'm03' }
]

export default class Detail extends Component {
    render() {
        // 接收params参数
        const {id, title} = this.props.match.params

        // 接收search参数
        // const { search } = this.props.location
        // const { id, title } = qs.parse(search.slice(1))

        // 接收state参数
        // const {id, title} = this.props.location.state || {} 
        // state默认为undefined

        const findContent = detailData.find((detailObj) => {
            return detailObj.id === id
        }) || {}
        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findContent.content}</li>
            </ul>
        )
    }
}
