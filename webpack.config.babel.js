// @flow
import webpack from 'webpack'
import {join} from 'path'

const config: webpack.Configuration = {
    context: join(__dirname, 'src'),
    entry: {
        'index.ios.js': './index.ios.tsx',
    },
    output: {
        path: __dirname,
        filename: '[name]',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        modules: ['node_modules'],
    },
    externals: [
        (ctx, request, callback) => {
            if (request === 'react-native') {
                return callback(null, 'require(\'react-native\')')
            }

            callback()
        },
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.jsx?$/,
                include: /node_modules\/(react-native-fontawesome)/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        "react",
                        "env",
                    ],
                    plugins: [
                        "transform-class-properties",
                        "transform-object-rest-spread",
                    ],
                },
            },
            {
                test: /\.styl$/,
                use: [
                    {loader: 'react-native-css-loader'},
                    {
                        loader: 'stylus-loader',
                        options: {
                            include: join(__dirname, 'src/style')
                        },
                    },
                ]
            }
        ]
    },
}

module.exports = config