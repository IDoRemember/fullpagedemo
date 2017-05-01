var webpack = require('webpack');
var path=require('path');
module.exports = {
    entry: [
        './main.js',
    ],
    output: {
        path:  path.resolve(__dirname, 'assets'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader',"html-loader"]},
        { test: /\.css$/, loader: "style!css" },
        {test: /\.less/,loader: 'style-loader!css-loader!less-loader'}
        ]
    },
    resolve:{
        extensions:['.css','.js','.json']
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};