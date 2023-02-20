import Keyboard from './keyboard'
import FalseTextbox from './false-textbox'

//按需引入
// export { StarrySky }

const components = [Keyboard, FalseTextbox]

const install = (App: any) => {
    components.forEach((item) => {
        App.component(item.__name, item)
    })
}

export default {
    install,
}
