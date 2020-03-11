const fs = require('fs')
const path = require('path')
const comps = require('../comps.json')

let importList = []
let registerList = []
let indexJsStr = ''
let exportList = []
Object.keys(comps).map(comp => {
    let compName = comp.replace(comp[0], comp[0].toUpperCase())
    importList.push(`import ${compName} from '.${comps[comp]}'`)
    registerList.push(`    Vue.component(${compName}.name, ${compName})`)
    exportList.push(`    ${compName}`)
})
indexJsStr = `
${importList.join('\n')}

const install = function (Vue) {
    if (install.installed) return
${registerList.join('\n')}
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    install,
${exportList.join(',\n')}
}
`
fs.createWriteStream(path.resolve(__dirname, './index.js'), {
    flags: 'w+'
}).write(indexJsStr, 'utf8')
