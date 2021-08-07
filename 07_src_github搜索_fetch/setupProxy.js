const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app){
   app.use(
       createProxyMiddleware('/api1',{  //带有api1前缀的请求转发给5000（触发该代理配置）
           target: 'http://loaclhost:5000',  // 请求转发给谁
           changeOrigin: true,
           pathRewrite: {'^/api1':''} //重写要求路径
       })
   )
}