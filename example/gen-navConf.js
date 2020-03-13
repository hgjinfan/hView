const fs = require('fs')
const path = require('path')

let fileMap = {}
let routerList = []
let sortRule = ['guide', 'basic']
const readFile = function (root = {}, fileName = '') {
    const fileList = fs.readdirSync(path.resolve(__dirname, fileName), { withFileTypes: true })
    if (!fileList.length) return
    root.children = []
    fileList.map(fileObj => {
        const { name } = fileObj
        if (fileObj.isDirectory()) {
            root.children.push(root[name] = { name })
            readFile(root[name], `${fileName}/${name}`)
            routerList.push({
                path: `${fileName}/${name}/:comName`.replace('./docs', '')
            })
            return
        }
        if (/\.md$/.test(name)) {
            let file = name.match(/(.*)\.md$/)[1]
            root.children.push({
                name: file,
                path: `${fileName}/${file}`.replace('./docs', '')
            })
        }
    })
}
readFile(fileMap, './docs')
fileMap.children = fileMap.children.sort((a, b) => sortRule.indexOf(a.name) - sortRule.indexOf(b.name))
let ret = {
    sideNav: [
        {
            'name': '指南',
            'children': fileMap.children.filter(item => item.name === 'guide')[0].children
        },
        {
            'name': '组件',
            'groups': fileMap.children.filter(item => item.name !== 'guide')
        }
    ]
}
let routerRet = {
    list: routerList
}
fs.createWriteStream(path.resolve(__dirname, './nav.conf.json'), {
    flags: 'w+'
}).write(JSON.stringify(ret, null, 4), () => {
    console.log('nav.conf.json生成')
})
fs.createWriteStream(path.resolve(__dirname, './router.conf.json'), {
    flag: 'w+'
}).write(JSON.stringify(routerRet, null, 4), () => {
    console.log('router.conf.json生成')
})


