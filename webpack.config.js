const webpack =　require("webpack");
module.exports = {
    entry: './src/centerconts.js',
    output: {
        path: __dirname + '/dist',
        filename: 'centerconts.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
