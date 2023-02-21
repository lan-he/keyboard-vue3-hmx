import Keyboard from './src/keyboard.vue'

Keyboard.install = (App: any) => {
    App.component(Keyboard.__name, Keyboard)
}

export default Keyboard
