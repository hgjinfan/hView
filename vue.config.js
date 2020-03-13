var md = require('markdown-it-container')
const mIt = require('markdown-it-decorate')
module.exports = {
    publicPath: './',
    outputDir: './example/dist',
    configureWebpack: {
        entry: './example/main.js',
        externals: {
            Vue: 'Vue',
            'vue-router': 'VueRouter'
        }
    },
    chainWebpack: config => {
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true,
                use: [
                    [
                        md,
                        'demo',
                        {
                            validate(params) {
                                return params.trim().match(/^demo\s*(.*)$/)
                            },
                            render(tokens, idx) {
                                if (tokens[idx].nesting === 1) {
                                    const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
                                    return `<demo-block>
                                                <div class="source" slot="source">${content}</div>
                                                <div class="code" slot="highlight">`;
                                } else {
                                    // closing tag
                                    return '</div></demo-block>\n';
                                }
                            }
                        }
                    ],
                    [mIt]
                ]
            })
    }
}