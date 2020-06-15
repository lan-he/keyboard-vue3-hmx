<template>
  <div id="app">
    <input type="text" v-model="value">
    <HelloWorld @onInputChange="onInputChange" @onInputOk="onInputOk" @onIputdelete="onIputdelete" @longPressClear="longPressClear"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'App',
  data() {
    return {
      value: ''
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    onInputChange(val) {
      this.value += val
    },
    onInputOk() {
      alert(this.value)
    },
    onIputdelete() {
      this.value = this.value.substr(0, this.value.length - 1)
    },
    longPressClear () {
      this.value = ''
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
