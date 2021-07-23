<template>
  <div class="login">
    <img src="https://img1.baidu.com/it/u=1257639984,1809454588&fm=26&fmt=auto&gp=0.jpg" class="login_banner" alt="">
    <div class="phone">
      <img src="@/assets/images/phone1.png" alt="">
      <input type="tel" placeholder="请输入手机号码" v-model="username">
    </div>
    <button @click="login">登录查看额度</button>
    <van-checkbox v-model="checked" checked-color="#d9b613">登录代表您已阅读并同意<span @click.stop="agreement(1)">《用户注册服务协议》</span>及<span @click.stop="agreement(2)">《隐私政策》</span> </van-checkbox>
  </div>
</template>

<script>
import { Checkbox , Toast , Dialog  } from 'vant';
export default {
  name: "login",
  components:{
    [Checkbox.name]:Checkbox,
    [Toast.name]:Toast,
    [Dialog.name]:Dialog,
  },
  data() {
    return {
      checked:true,
      username:''
    }
  },
  mounted() {
  },
  methods:{
    agreement(val){
      this.$router.push({path:'/agreement',query:{type:val}})
    },
    login(){
      let reg =  /^1[356789]\d{9}$/
      if(!reg.test(this.username)){
        Toast('请输入正确的手机号码')
        return
      }
      if(!this.checked){
        Toast('请勾选须知')
        return
      }
      this.$axios({
        method: "post",
        url: "/user/registOrLogin",
        data:{username:this.username,channel_id:'1'}
      }).then((res) => {
        let result = res.data
        if(result.status == 200 ){
          Dialog.confirm({
            title: '提示',
            message: '立即完善资料',
            confirmButtonText:'去完善'
          })
          .then(() => {
            this.$router.replace('/step')
          })
          .catch(() => {
            if(this.$route.query.redirect){
              this.$router.replace(this.$route.query.redirect)
            }else{
              this.$router.replace('/')
            }
          });
          localStorage.setItem('userInfo',JSON.stringify(result.data))
        }
      })
    },
  }
};
</script>
<style lang="less" scope>
  .login{
    min-height: 100vh;
    background: #fff;
    &>img{
      height: 706/2.44px;
      width: 100%;
      margin-bottom: 192/2.44px;
    }
    .phone{
      margin: 0 37.5/2.44px 152/2.44px;
      padding-bottom:34/2.44px;
      border-bottom: 1/2.44px solid #cbcbcb;
      display: flex;
      align-items: center;
      img{
        width: 38/2.44px;
        height: 55/2.44px;
        margin-right: 34/2.44px;
      }
      input{
        flex: 1;
        font-size: 45/2.44px;
        border: none;
      }
    }
    button{
      width: 784/2.44px;
      height: 137/2.44px;
      border-radius: 69/2.44px;
      background: #fad637;
      border: none;
      font-size: 43/2.44px;
      margin-bottom: 160/2.44px;
      color: #000;
    }
    .van-checkbox{
      margin-left: 28/2.44px!important;
      .van-checkbox__label{
        font-size: 28/2.44px!important;
        span{
          color: #d9b613;
        }
      }
    }
  }
</style>
