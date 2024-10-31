<script setup>
import { ref } from 'vue'
import Keyboard from '../packages/keyboard/src/keyboard.vue'
import FalseTextbox from '../packages/false-textbox/src/false-textbox.vue'
const msgs = ref('')
const inputKey = (item) => {
    console.log(item, 'itemitem')
    msgs.value = msgs.value + item
}
const inputDelete = (item) => {
    msgs.value = msgs.value.slice(0, -1)
}
</script>
<template>
    <div style="display: flex; justify-content: center; margin-top: 20px">
        <input type="text" style="width: 90%" v-model="msgs" />
    </div>
    <Keyboard @inputKey="inputKey" @inputDelete="inputDelete" />
    <!-- <FalseTextbox /> -->
</template>
<style scoped></style>
