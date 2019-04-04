Component({
  mixins: [],
  data: {
    keyNumber: [1,2,3,4,5,6,7,8,9,0],
    keyEnInput1: ['Q','W','E','R','T','Y','U','I','O','P'],
    keyEnInput2: ['A','S','D','F','G','H','J','K','L'],
    keyEnInput3: ['Z','X','C','V','B','N','M'],
    keyPhone: [1,2,3,4,5,6,7,8,9,"+",0],
    bottom:'0'
  },
  props: {
    isShow: false,
    keyBoardType: 1,//键盘样式 “1” 为数字英文键盘 “2” 为数字键盘
    backgroundColor:"#fff",
    onInputChange:(val)=>{},
    onIputdelete:()=>{},
    onInputOk:()=>{},
    isAdaptive:false,
    onLongPressDelete:()=>{}
  },
  didMount() {
    if(this.props.isAdaptive){
      this.setData({
        bottom:'60rpx'
      })
    }else{
      this.setData({
        bottom:'0'
      })
    }
  },
  methods: {
    longPressDelete(){//长按清除
      this.props.onLongPressDelete()
    },
    vehicleTap: function (event) {
      // console.log(event,'....')
      let val = event.target.dataset.value;
      switch (val){
        case 'delete':
          this.props.onIputdelete(val);
          this.props.onInputChange(val);
        break;
        case 'ok':
          this.props.onInputOk(val);
        break;
        default:
          this.props.onInputChange(val);
      }
    },
  }
});