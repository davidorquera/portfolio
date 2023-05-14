const httpProxy = require('http-proxy');
const proxy = httpProxy.createServer({target: 'http://localhost:3000'})

module.exports = {
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
          config.node = {
            fs: 'empty'
          }
        }
    
        return config
      }
}
