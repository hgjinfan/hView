/**
 * @param{String}mode null 即分别打包所有组件 compsName打包对应组件
 * 
 */
const fs = require('fs')
const path = require('path')
const util = require('util')
let mode = process.argv.slice(2)[0]
let compsMap = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../comps.json'), 'utf8'))
compsList = Object.keys(compsMap)
const temp = fs.readFileSync(path.resolve(__dirname, '../vue.config.js'), 'utf8')
let rootDir = path.resolve(__dirname, '..')
function dynamicConfig(compsName) {
    console.log(compsName)
    return `module.exports = {
        outputDir: './build/components/${compsName}'
    }
    `
}
function resetConfig() {
    const writeStream = fs.createWriteStream(path.resolve(__dirname, '../vue.config.js'), 'utf8', {
        flags: 'w+'
    })
    writeStream.write(temp, () => {
        console.log('打包完毕')
    })
}
function loop() {
    if (!compsList.length) {
        resetConfig()
        return
    }
    let compsName = mode || compsList.shift()
    const writeStream = fs.createWriteStream(path.resolve(__dirname, '../vue.config.js'), 'utf8', {
        flags: 'w+'
    })
    writeStream.write(dynamicConfig(compsName))
    writeStream.end()
    writeStream.on('finish', async () => {
        console.log('写入完成')
        const exec = util.promisify(require('child_process').exec);
        await exec(`cd ${rootDir} && npm run lib h-${compsName} ${compsMap[compsName]}`)
        !mode && loop()
        mode && resetConfig()
    })
}
loop()

