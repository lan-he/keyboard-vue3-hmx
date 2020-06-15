<template>
  <div class="hello">
    <div v-if="isShow" class="vehicle-panel">
      <!--数字键盘  -->
      <div class="number-panel-box" v-if="keyBoardType == 2">
        <div class="number-panel-row">
          <div
            class="number-panel-row-key vehicle-hover"
            v-for="item in keyPhone"
            @click="vehicleTap(item)"
            :key="item"
          >
            {{ item }}
          </div>
          <div
            onLongTap="longPressDelete"
            @click="vehicleTap(item)"
            class="number-panel-row-button vehicle-hover"
          >
            <image
              src="../../image/airport-card/delete.png"
              class="vehicle-en-button-delete"
              mode="aspectFit"
              >删除</image
            >
          </div>
        </div>
      </div>
      <!--英文键盘  -->
      <block class="letter-panel-box" v-if="keyBoardType == 1">
        <div class="vehicle-panel-row">
          <div
            class="vehicle-panel-row-button vehicle-panel-row-button-number vehicle-hover"
            v-for="item in keyNumber"
            @click="vehicleTap(item)"
            :key="item"
          >
            {{ item }}
          </div>
        </div>
        <div class="vehicle-panel-row">
          <div
            class="vehicle-panel-row-button vehicle-hover"
            v-for="item in keyEnInput1"
            @click="vehicleTap(item)"
            :key="item"
          >
            {{ item }}
          </div>
        </div>
        <div class="vehicle-panel-row">
          <div
            class="vehicle-panel-row-button vehicle-hover"
            v-for="item in keyEnInput2"
            @click="vehicleTap(item)"
            :key="item"
          >
            {{ item }}
          </div>
          <div
            class="vehicle-panel-row-button vehicle-panel-row-button-img vehicle-hover"
            @click="vehicleTap('delete')"
            @touchstart="gotouchstart"
          >
            <img
              :src="require('@/assets/image/delete.png')"
              class="vehicle-en-button-delete"
            />
          </div>
        </div>
        <div class="vehicle-panel-row-last">
          <div
            class="vehicle-panel-row-button vehicle-panel-row-button-last vehicle-hover"
            v-for="item in keyEnInput3"
            @click="vehicleTap('delete')"
            :key="item"
          >
            {{ item }}
          </div>
          <div
            class="vehicle-panel-row-button vehicle-panel-ok"
            @click="vehicleTap('ok')"
            data-value="ok"
          >
            确认
          </div>
        </div>
      </block>
    </div>
  </div>
</template>

<script>
let timeOutEvent = 0
export default {
  name: 'key',
  data() {
    return {
      keyNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      keyEnInput1: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      keyEnInput2: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      keyEnInput3: ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
      keyPhone: [1, 2, 3, 4, 5, 6, 7, 8, 9, '+', 0],
      bottom: '0',
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
    keyBoardType: {
      type: Number,
      default: 1,
    }, //键盘样式1为数字英文键盘2为数字键盘
    isAdaptive: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    vehicleTap(value) {
      let val = value
      switch (val) {
        case 'delete':
          this.$emit('onIputdelete', val)
          break
        case 'ok':
          this.$emit('onInputOk', val)
          break
        default:
          this.$emit('onInputChange', val)
      }
    },
    gotouchstart() {
      //长按清除
      let that = this
      clearTimeout(timeOutEvent) //清除定时器
      timeOutEvent = 0
      timeOutEvent = setTimeout(function() {
        that.$emit('longPressClear')
      }, 600)
    },
  },
}
</script>

<style scoped>
/* 数字键盘样式 */
.number-panel-box {
  display: flex;
  width: 100%;
}
.number-panel-row {
  display: flex;
  background: rgba(210, 213, 219, 0.9);
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 7px;
  padding-bottom: 0;
}
.number-panel-row-key {
  background-color: #fff;
  margin: 7px;
  padding: 5px;
  width: 28%;
  height: 94px;
  text-align: center;
  line-height: 94px;
  border-radius: 10px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.35);
  /* font-size: 50px; */
}
.number-panel-row-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(210, 213, 219, 0.9);
  width: 220px;
  height: 94px;
  border-radius: 10px;
  margin: 7px;
  padding: 5px;
}
.number-panel-img image {
  width: 70px;
  height: 105px;
}
/* 字母键盘样式 */
.vehicle-panel {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  background: #d2d5db;
  overflow: hidden;
  box-sizing: border-box;
}
.letter-panel-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.vehicle-panel-row {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  align-items: center;
}
.vehicle-panel-row-last {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px;
  padding-top: 10px;
}
.vehicle-panel-row-button {
  background-color: #fff;
  margin: 5px;
  padding: 5px;
  width: 63px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 20px;
  background: #ffffff;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.35);
  border-radius: 10px;
}
.vehicle-panel-row-button-last {
  width: 85px;
  height: 44px;
  line-height: 44px;
}
.vehicle-hover:active {
  background-color: #ccc;
}
.vehicle-panel-row-button-img {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(171, 179, 189, 0.5);
}
.vehicle-en-button-delete {
  width: 41px;
  height: 30px;
}
.vehicle-panel-row-button-img:active {
  background-color: #fff;
}
.vehicle-panel-ok {
  background-color: #4287ff;
  width: 180px;
  height: 44px;
  font-family: 'PingFangSC-Medium';
  font-size: 16px;
  color: #fff;
}
.vehicle-panel-ok:active {
  background-color: #4b71e6;
}
</style>
