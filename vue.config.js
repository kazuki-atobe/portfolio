const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    outputDir: 'docs',
    // assetsDir: '/portfolio.git.io/',
    publicPath: '/portfolio/',
    transpileDependencies: [
        'vuetify'
    ]
})
