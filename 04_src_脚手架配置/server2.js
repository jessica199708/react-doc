// const express = require('express')
// const app = express()

// app.use((request, response, next) => {
//     console.log('有人请求服务器2')
//     next()
// })

// app.get('/cars', (request, response) => {
//     const students = [
//         { id: '001', name: 'benchi', age: 18 },
//         { id: '002', name: 'mazida', age: 19 },
//         { id: '003', name: 'aotuo', age: 20 }
//     ]
//     response.send(cars)  //数据交出去
// })

// app.listen(5001, (err) => {
//     if (!err) { //请求成功
//         console.log('服务器启动成功，请求学生地址为：http://localhost:5001/cars')
//     }
// })