import Button from './src'

Button.install = function (Vue) {
    console.log('Button install')
    Vue.component(Button.name, Button)
}

export default Button