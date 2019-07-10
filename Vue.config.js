module.exports = {
    // 基本路径
    baseUrl: './',
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        https: false,
        proxy: {
            '/api': {
                target: 'http://oa.cjwy168.com',
                ws: true,
                changeOrigin: true
            }
        } // 设置代理
    }
}