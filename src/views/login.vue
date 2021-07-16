<template>
  <div class="login">
    <img src="https://img1.baidu.com/it/u=1257639984,1809454588&fm=26&fmt=auto&gp=0.jpg" class="login_banner" alt="">
    <div class="phone">
      <img src="@/assets/images/phone1.png" alt="">
      <input type="tel" placeholder="请输入手机号码">
    </div>
    <button>登录查看额度</button>
    <van-checkbox v-model="checked">复选框</van-checkbox>
  </div>
</template>

<script>
import { Checkbox } from 'vant';
export default {
  name: "login",
  components:{
    [Checkbox.name]:Checkbox
  },
  data() {
    return {
      checked:true,
    }
  },
  methods:{
    
  }
};
</script>
<style lang="less">
  .login{
    min-height: 100vh;
    background: #fff;
    &>img{
      height: 471px;
      width: 100%;
      margin-bottom: 47.5px;
    }
    .phone{
      margin: 0 37.5px 38px;
      padding-bottom:10.5px;
      border-bottom: 1px solid #cbcbcb;
      display: flex;
      align-items: center;
      img{
        width: 20px;
        height: 20px;
      }
      input{
        flex: 1;
        font-size: 22px;
        border: none;
      }
    }
    button{
      width: 195px;
      height: 69px;
      border-radius: 69px;
      background: #fad637;
      border: none;
      font-size: 30px;
      margin-bottom: 80px;
    }
  }
</style>
