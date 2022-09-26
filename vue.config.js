const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    outputDir: 'docs',
    publicPath: './',
    filenameHashing: false,
    productionSourceMap: false,
    transpileDependencies: [
        'vuetify'
    ]
})
