<template>
  <div class="my">
    <div class="top">
      <div class="left">
        <img :src="userInfo.face_image_big || 'http://static.scynb.cn/im/head/default.jpg'" alt="">
        <span v-if="false">未开通会员</span>
      </div>
      <p class="phone">{{userInfo.username || '未登录'}}</p>
      <p class="renzhen" @click="$router.push('/step')">实名认证>></p>
    </div>
    <ul class="menu">
      <li>
        <img src="@/assets/images/jiekuan.png" alt="">
        <span>我要借款</span>
      </li>
      <li>
        <img src="@/assets/images/xinxi.png" alt="">
        <span>联系客服</span>
      </li>
      <li>
        <img src="@/assets/images/xingyong1.png" alt="">
        <span>信用报告</span>
      </li>
    </ul>
    <div class="vip" v-if="false">
      <div class="left">
        <img src="@/assets/images/huangguan1.png" alt="">
        <span>黑金VIP·开通享受专属下款通道</span>
      </div>
      <button>去开通</button>
    </div>
    <div class="tools">
      <div class="title"><span></span>常用工具</div>
      <ul>
        <li>
          <img src="@/assets/images/quanyi.png" alt="">
          <span>兑换权益</span>
        </li>
        <li>
          <img src="@/assets/images/jilu.png" alt="">
          <span>网贷记录</span>
        </li>
        <li>
          <img src="@/assets/images/qiandao.png" alt="">
          <span>签到领现金</span>
        </li>
      </ul>
    </div>
    <div class="setting">
      <div class="title"><span></span>设置</div>
      <ul>
        <li @click="$router.push('/aboutOurs')">
          <div class="left">
            <img src="@/assets/images/tishi.png" alt="">
            <span>关于我们</span>
          </div>
          <span class="icon iconfont icon-arrow-right"></span>
        </li>
        <li>
          <div class="left" @click="link('credit')">
            <img src="@/assets/images/tousu.png" alt="">
            <span>投诉建议</span>
          </div>
          <span class="icon iconfont icon-arrow-right"></span>
        </li>
        <li @click="$router.push('/customer')">
          <div class="left">
            <img src="@/assets/images/phone.png" alt="">
            <span>联系客服</span>
          </div>
          <span class="icon iconfont icon-arrow-right"></span>
        </li>
        <li>
          <div class="left">
            <img src="@/assets/images/shanchu.png" alt="">
            <span>注销账户</span>
          </div>
          <span class="icon iconfont icon-arrow-right"></span>
        </li>
      </ul>
    </div>
    <button v-if="userInfo" @click="logout">退出登录</button>
  </div>
</template>

<script>
export default {
  name: "my",
  data() {
    return {
      userInfo:JSON.parse(localStorage.getItem('userInfo')) || ''
    };
  },
  methods: {
    logout(){
      localStorage.removeItem('userInfo')
      this.$router.push('/')
    },
    link(url){
      this.$router.push(`/${url}`)
      this.$emit('changeActive',url)
    }
  },
};
</script>

<style scoped lang="less">
.my {
  height: calc(100vh - 50px);
  overflow-x: hidden;
  overflow-y: scroll;
  .top { 
    padding: 46/2.44px 0  0 30/2.44px;
    position: relative;
    height: 220/2.44px;
    background: #fcd537;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    z-index: 1;
    // overflow: hidden;
    &::after {
      content: '';
      width: 140%;
      height: 55%;
      position: absolute;
      left: -20%;
      top: 200/2.44px;
      border-radius: 0 0 50% 50%;
      background: #fcd537;
    }
    .left{
      position: relative;
      margin-right: 35/2.44px;
      width: 160/2.44px;
      height: 160/2.44px;
      img{
        width: 100%;
        height: 96%;
        border-radius: 100%;
      }
      span{
        position: absolute;
        bottom: 0/2.44px;
        left: 50%;
        white-space: nowrap;
        transform: translateX(-50%);
        color: #fff;
        padding: 14/2.44px;
        border-radius: 32/2.44px;
        background: #000;
        font-size: 26/2.44px;
      }
    }
    .phone{
      margin-top: 33/2.44px;
      font-size: 40/2.44px;
      flex: 1;
      text-align: left;
    }
    .renzhen{
      margin-top: 37/2.44px;
      padding: 27/2.44px 49/2.44px 23/2.44px 50/2.44px;
      background: #ffeeab;
      border-radius: 50/2.44px 0 0 50/2.44px;
      font-size: 42/2.44px;
    }
  }
  .menu{
    display: flex;
    position: relative;
    top: 0;
    z-index: 3;
    margin: 0px 34/2.44px;
    background: #fff;
    border-radius: 10/2.44px;
    justify-content: space-around;
    padding: 30/2.44px 0 45/2.44px 0;
    li{
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 84/2.44px;
        height: 94/2.44px;
        margin-bottom: 47/2.44px;
      }
      span{
        font-size: 36/2.44px;
      }
    }
  }
  .vip{
    margin: 32/2.44px 34/2.44px 0;
    background: #000;
    border-radius: 10/2.44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 26/2.44px 32/2.44px;
    .left{
      display: flex;
      align-items: center;
      img{
        width: 60/2.44px;
        height: 58/2.44px;
        margin-right: 10/2.44px;
      }
      span{
        color: #fff;
        font-size: 36/2.44px;
      }
    }
    button{
      padding: 16/2.44px 37/2.44px;
      background: transparent;
      border: 1/2.44px solid #fff;
      border-radius: 40/2.44px;
      color: #fff;
      font-size: 34/2.44px;
    }
  }
  .tools{
    margin: 32/2.44px 20/2.44px 46/2.44px;
    background: #fff;
    border-radius: 10/2.44px;
    padding: 52/2.44px 0 43/2.44px 40/2.44px;
    .title{
      text-align: left;
      font-size: 48/2.44px;
      margin-bottom: 30/2.44px;
      span{
        width: 11/2.44px;
        height: 37/2.44px;
        display: inline-block;
        background: #fcd149;
        margin-right: 10/2.44px;
      }
    }
    ul{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      li{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-right: 100/2.44px;
        img{
          width: 78/2.44px;
          height: 64/2.44px;
          margin-bottom: 48/2.44px;
        }
      }
    }
  }
  .setting{
    margin: 0 20/2.44px 20/2.44px;
    background: #fff;
    border-radius: 10/2.44px;
    padding: 52/2.44px 0 56/2.44px 40/2.44px;
    .title{
      text-align: left;
      font-size: 48/2.44px;
      margin-bottom: 100/2.44px;
      span{
        width: 11/2.44px;
        height: 37/2.44px;
        display: inline-block;
        background: #fcd149;
        margin-right: 10/2.44px;
      }
    }
    ul{
      li{
        display: flex;
        justify-content: space-between;
        margin-bottom: 112/2.44px;
        padding-right: 20/2.44px;
        &:last-child{
          margin-bottom: 0;
        }
        .left{
          display: flex;
          align-items: center;
          img{
            width: 41/2.44px;
            height: 41/2.44px;
            margin-right: 10/2.44px;
          }
          span{
            font-size: 42/2.44px;
          }
        }
      }
    }
  }
  &>button{
    width: 80%;
    height: 139/2.44px;
    font-size: 48/2.44px;
    background: #fcd43c;
    border: none;
    border-radius: 80/2.44px;
    margin-bottom: 116/2.44px;
  }
}
</style>
