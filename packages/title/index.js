import Title from './src'

Title.install = function (Vue) {
    console.log('Title install')
    Vue.component(Title.name, Title)
}

export default Title