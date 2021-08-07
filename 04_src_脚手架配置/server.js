// const express = require('express')
// const app = express()

// app.use((request, response, next) => {
//     console.log('有人请求服务器')
//     next()
// })

// app.get('/students', (request, response) => {
//     const students = [
//         { id: '001', name: 'tom', age: 18 },
//         { id: '002', name: 'jerry', age: 19 },
//         { id: '003', name: 'tony', age: 20 }
//     ]
//     response.send(students)  //数据交出去
// })

// app.listen(5000, (err)=>{
//     if(!err){ //请求成功
//         console.log('服务器启动成功，请求学生地址为：http://localhost:5000/students')
//     }
// })