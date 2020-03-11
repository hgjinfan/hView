
import Title from '../packages/title/index.js'
import Button from '../packages/button/index.js'

const install = function (Vue) {
    if (install.installed) return
    Vue.component(Title.name, Title)
    Vue.component(Button.name, Button)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    install,
    Title,
    Button
}
