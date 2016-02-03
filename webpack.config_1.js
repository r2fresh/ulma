module.exports = {
    entry : './src/js/app.react.js',
    output : {
        path : __dirname + '/dist/js',
        filename : 'bundle.js'
    },
    module : {
        loaders:[
            {test: /\.css$/, loader: "style!css" },
            {
                test: /\.js$/,
                exclude : /node_modules/,
                loader : 'babel-loader',
                query : {
                    presets : ['react', 'es2015'],
                    cacheDirectory : true
                }
            }
        ]
    },
    // devServer: {
    //     contentBase: "",
    //     colors: true,
    //     historyApiFallback: true,
    //     inline: true,
    //     publicPath: "/dist/",
    //     automaticRefresh : true
    //   }
}
