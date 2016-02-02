module.exports = {
    entry : './public/js/entry.js',
    output : {
        path : __dirname + '/public/js/',
        filename : 'bundle.js'
    },
    module : {
        loaders:[
            {test: /\.css$/, loader: "style!css" }
        ]
    },
    devServer: {
        contentBase: "",
        colors: true,
        historyApiFallback: true,
        inline: true,
        publicPath: "/public/",
        automaticRefresh : true
      }
}
