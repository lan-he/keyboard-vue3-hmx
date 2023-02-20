<script setup name="FalseTextbox">
import { ref, onMounted } from 'vue'
const props = defineProps({
    starsCount: {
        type: [Number, String],
        default: () => 800,
    },
    distance: {
        type: [Number],
        default: () => 800,
    },
})
//星星实体
const star = ref()
onMounted(() => {
    let starArr = star.value
    starArr.forEach((item) => {
        let speed = 0.1 + Math.random() * 1
        let thisDistance = props.distance + Math.random() * 300
        item.style.transformOrigin = `0 0 ${thisDistance}px`
        item.style.transform = `translate3d(0,0,-${thisDistance}px) rotateY(${
            Math.random() * 360
        }deg) rotateX(${Math.random() * -50}deg) scale(${speed},${speed})`
    })
})
</script>
<template>
    <div class="false-textbox-box">false-textbox</div>
</template>
<style scoped>
.false-textbox-box {
    width: 300px;
    height: 100px;
    border: 1px solid saddlebrown;
}
</style>
