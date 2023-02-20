<script setup>
import { ref } from 'vue'
import Keyboard from '../packages/keyboard/src/keyboard.vue'
import FalseTextbox from '../packages/false-textbox/src/false-textbox.vue'
const msgs = ref('')
const inputKey = (item) => {
    msgs.value = msgs.value + item
}
</script>
<template>
    <div>{{ msgs }}</div>
    <Keyboard @inputKey="inputKey" />
    <!-- <FalseTextbox /> -->
</template>
<style scoped></style>
