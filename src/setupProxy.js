// const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware');



module.exports=function(app){
    app.use(
        '/project',
        proxy({
            target:'http://172.30.1.25:8080',
            changeOrigin:true,
        })
    );
};