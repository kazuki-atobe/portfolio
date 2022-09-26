const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    outputDir: 'docs',
    publicPath: '/portfolio/',
    filenameHashing: false,
    productionSourceMap: false,
    transpileDependencies: [
        'vuetify'
    ]
})
