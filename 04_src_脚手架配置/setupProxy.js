const proxy = require('http-proxy-middleware')

module.exports = function(app){
   app.use(
       proxy('/api1',{  //带有api1前缀的请求转发给5000
           target: 'http://loaclhost:5000',
           changeOrigin: true,
           pathRewrite: {'^/api1':''}

       })
    //    proxy('/api2', {  //带有api1前缀的请求转发给5000
    //        target: 'http://loaclhost:5001',
    //        changeOrigin: true,
    //        pathRewrite: { '^/api2': '' }

    //    })
   )
}