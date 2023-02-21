<script setup name="Keyboard">
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
                class="operation-button__keyboardhmx peration-button-left__keyboardhmx button__boxshadow">
                <svg
                    t="1676970939334"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4062"
                    width="32"
                    height="32">
                    <path
                        d="M688.64 995.2H341.12a53.12 53.12 0 0 1-53.12-52.48V520.96H45.44a32 32 0 0 1-30.08-21.12 30.72 30.72 0 0 1 8.32-35.2L512 21.76a32 32 0 0 1 44.16 0l442.88 442.24a33.92 33.92 0 0 1 7.04 35.84 32 32 0 0 1-30.08 19.84h-215.68v402.56a71.68 71.68 0 0 1-71.68 72.96z m-336-64h336a7.04 7.04 0 0 0 7.04-7.04V488.32a32 32 0 0 1 32.64-32h172.16L535.04 90.88 128 456.32h192a32 32 0 0 1 32.64 32z"
                        fill="#323333"
                        p-id="4063"></path>
                </svg>
            </div>
            <div
                class="keyboard-item__keyboardhmx button__boxshadow"
                v-for="item in keyEnInput3"
                @touchstart="touchstartButton"
                @touchend="touchendButton($event, item)">
                {{ item }}
            </div>
            <div
                class="operation-button__keyboardhmx peration-button-right__keyboardhmx button__boxshadow">
                <svg
                    t="1676971082940"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4216"
                    width="32"
                    height="32">
                    <path
                        d="M856.2 890.5H402.4c-55.3-0.1-108-23.4-145.4-64.2L23 571c-30.7-33.4-30.7-84.8 0-118.2l233.9-255.1c37.3-40.8 90.1-64.1 145.4-64.2h453.8c92.7 0.2 167.8 75.4 167.8 168.1v420.7c0.1 92.8-75 168-167.7 168.2zM402.6 184.9c-41 0-80 17.2-107.8 47.4L60.9 487.6c-12.8 13.7-12.8 34.9 0 48.6l233.7 255.3c27.7 30.2 66.8 47.4 107.8 47.4h454c64.4-0.1 116.5-52.4 116.5-116.8V301.6c0-64.4-52.2-116.6-116.5-116.8H402.6z m323.7 471c-6.8 0-13.4-2.7-18.2-7.5l-100-100.2L508 648.4c-9.9 10.1-26.1 10.2-36.2 0.3-10.1-9.9-10.2-26.1-0.3-36.2l0.4-0.4 100-100.2-100-100.2c-10.1-9.9-10.3-26.1-0.4-36.2 9.9-10.1 26.1-10.3 36.2-0.4l0.4 0.4 100 100.2 100-100.2c10-10 26.2-10 36.2 0 10 10 10 26.2 0 36.2l-100 100.2 100.2 100.2c10 10 10 26.3-0.1 36.3-4.8 4.8-11.3 7.5-18.1 7.5z"
                        p-id="4217"></path>
                </svg>
            </div>
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
.peration-button-left__keyboardhmx .icon {
    width: 6vw;
}
.peration-button-right__keyboardhmx {
    margin-left: 3vw;
}
.peration-button-right__keyboardhmx .icon {
    width: 6vw;
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
