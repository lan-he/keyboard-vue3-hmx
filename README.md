# 基于 VUE3 开发的 keyboard 移动端弹出键盘

<div align=left>
    github地址：
    <a href="https://github.com/mingxuann/keyboard-vue3-hmx" target="_blank">github</a> 
</div>  
<div align=left>
npm地址： 
    <a href="https://www.npmjs.com/package/keyboard-vue3-hmx" target="_blank">npm</a>
</div>

---

<div align=center>
    <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7999dd760ebf4af5827f068a7078471d~tplv-k3u1fbpfcp-zoom-1.image"/>
</div>

## 安装

```sh
npm i keyboard-vue3-hmx
// or
yarn add keyboard-vue3-hmx
```

## 使用

```js
// main.js
import keyBoardHmxVue3 from 'key-board-hmx-vue3'
import 'key-board-hmx-vue3/lib/style.css'

createApp(App).use(keyBoardHmxVue3).mount('#app')
```

```js
// App.vue
<keyboard @inputKey="inputKey" @inputDelete="inputDelete" />
```
