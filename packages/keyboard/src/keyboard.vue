<script setup name="StarrySky">
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
const emit = defineEmits(['inputKey'])
onMounted(() => {})
const keyEnInput1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
const keyEnInput2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
const keyEnInput3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
const touchstartButton = (e) => {
    e.target.style.background = `#acb0bb`
}
const touchendButton = (e, item) => {
    e.target.style.background = `#ffffff`
    emit('inputKey', item)
}
</script>
<template>
    <div class="keyboard-box__keyboardhmx">
        <div class="keyboard-line__keyboardhmx">
            <div
                class="keyboard-item__keyboardhmx button__boxshadow"
                v-for="item in keyEnInput1"
                @touchstart="touchstartButton"
                @touchend="touchendButton($event, item)">
                {{ item }}
            </div>
        </div>
        <div class="keyboard-line__keyboardhmx">
            <div
                class="keyboard-item__keyboardhmx button__boxshadow"
                v-for="item in keyEnInput2"
                @touchstart="touchstartButton"
                @touchend="touchendButton($event, item)">
                {{ item }}
            </div>
        </div>
        <div class="keyboard-line__keyboardhmx">
            <div
                class="operation-button__keyboardhmx peration-button-left__keyboardhmx button__boxshadow"></div>
            <div
                class="keyboard-item__keyboardhmx button__boxshadow"
                v-for="item in keyEnInput3"
                @touchstart="touchstartButton"
                @touchend="touchendButton($event, item)">
                {{ item }}
            </div>
            <div
                class="operation-button__keyboardhmx peration-button-right__keyboardhmx button__boxshadow"></div>
        </div>
        <div class="keyboard-line__keyboardhmx">
            <div class="switch__keyboardhmx button__boxshadow">123</div>
            <div
                class="space__keyboardhmx button__boxshadow"
                @touchstart="touchstartButton"
                @touchend="touchendButton($event, `&nbsp;`)">
                space
            </div>
            <div class="ok__keyboardhmx button__boxshadow">ok</div>
        </div>
    </div>
</template>
<style scoped>
.keyboard-box__keyboardhmx {
    width: 100vw;
    height: 70vw;
    background-color: #d2d3d7;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 8vw 0;
    box-sizing: border-box;
}
.keyboard-line__keyboardhmx {
    display: flex;
    justify-content: center;
}
.button__boxshadow {
    box-shadow: 0px 1.6px 3px 0px #b5b7bc;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    font-size: 5.2vw;
    border-radius: 1vw;
    font-family: PingFang;
    color: #16111e;
    margin: 1.5vw 0.7vw;
}
.keyboard-item__keyboardhmx {
    width: 8.4vw;
    height: 11vw;
}
.operation-button__keyboardhmx {
    width: 11vw;
    height: 11vw;
    background: #acb0bb;
}
.peration-button-left__keyboardhmx {
    margin-right: 3vw;
}
.peration-button-right__keyboardhmx {
    margin-left: 3vw;
}
.switch__keyboardhmx {
    width: 23vw;
    height: 11vw;
    background: #acb0bb;
    color: #16111e;
}
.space__keyboardhmx {
    width: 48vw;
    height: 11vw;
}
.ok__keyboardhmx {
    width: 23vw;
    height: 11vw;
    background: #3478f3;
    color: #fff;
}
</style>
