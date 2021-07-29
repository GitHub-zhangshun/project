<template>
  <div class="customer">
    <div class="top">
      <div class="icon">
        <img :src="icon">
      </div>
      <p class="title">关注够用管家微信公众号</p>
      <div class="tips">够用管家</div>
      <img class="qrcode" :src="qrcode" alt="">
      <p class="consulting">咨询在线人工客服</p>
    </div>
    <ul>
      <li>复制微信号，打开微信，粘贴在搜索框内，搜索公众号并关注</li>
    </ul>
    <textarea id="input">够用管家</textarea>
    <div class="copy" @click="copyText">复制微信号</div>
  </div>
</template>

<script>
import {Toast} from 'vant';
  export default {
    name:'customer',
    components:{
      [Toast.name]:Toast,
    },
    data() {
      return {
        icon:'',
        qrcode:''
      }
    },
    mounted() {
      this.$axios({
        method: "get",
        url: "/conf/aboutUs",
      }).then((res) => {
        this.icon = res.data.data.icon
        this.qrcode = res.data.data.qrcode
      })
    },
    methods: {
      copyText(){
        var input = document.getElementById("input");
        input.select(); // 选中文本
        document.execCommand("copy"); // 执行浏览器复制命令
        Toast('复制成功')
      }
    },  
  }
</script>

<style lang="less" scoped>
.customer{
  height: calc( 100vh - 60px);
  overflow-y: scroll;
  .top{
    background: #fff;
    margin: 222/2.44px 123/2.44px 102/2.44px;
    position: relative;
    padding: 133/2.44px 90/2.44px 64/2.44px;
    border-radius: 20/2.44px;
    .icon{
      width: 146/2.44px;
      height: 146/2.44px;
      border-radius: 100%;
      overflow: hidden;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -73/2.44px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .title{
      font-size: 44/2.44px;
      margin-bottom: 38/2.44px;
    }
    .tips{
      font-size: 38/2.44px;
      margin-bottom: 84/2.44px;
      color: #6e6e6e;
    }
    .qrcode{
      width: 388/2.44px;
      height: 388/2.44px;
      margin-bottom: 90/2.44px;
    }
    .consulting{
      font-size: 30/2.44px;
    }
  }
  ul{
    margin: 0 123/2.44px;
    li{
      text-align: left;
      font-size: 42/2.44px;
      color: #66696b;
      line-height: 1.5;
    }
  }
  .copy,#input{
    position:fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50/2.44px;
  }
  #input{
    z-index: -1;
  }
}
</style>