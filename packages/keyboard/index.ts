import Keyboard from './src/starry-sky.vue'

Keyboard.install = (App: any) => {
    App.component(Keyboard.__name, Keyboard)
}

export default Keyboard
