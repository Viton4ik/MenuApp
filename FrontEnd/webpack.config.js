const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.js",
        publicPath: '/',
    },
    devServer: {
        // static: './dist',
        // port: 8002,
        port: 3000,
        historyApiFallback: true,

        // historyApiFallback: {
        //     disableDotRule: true,
        //     // rewrites: [
        //     //   { from: /^\/$/, to: '/index.html' },
        //     //     { from: /./, to: '/index.html' },
        //     //     // { from: /\/users\/.*/, to: '/index.html' },
        //     // ],
        // },
        
        // hot: true, // HMR
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"]
                      }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
}