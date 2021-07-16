<template>
  <div class="my">
    <div class="top">
      <div class="left">
        <img src="https://img1.baidu.com/it/u=1257639984,1809454588&fm=26&fmt=auto&gp=0.jpg" alt="">
        <span>未开通会员</span>
      </div>
      <p class="phone">1111111111</p>
      <p class="renzhen">实名认证>></p>
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
    <div class="vip">
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
        <li>
          <div class="left">
            <img src="@/assets/images/tishi.png" alt="">
            <span>关于我们</span>
          </div>
          <span class="icon iconfont icon-arrow-right"></span>
        </li>
        <li>
          <div class="left">
            <img src="@/assets/images/tousu.png" alt="">
            <span>投诉建议</span>
          </div>
          <span class="icon iconfont icon-arrow-right"></span>
        </li>
        <li>
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
    <button>退出登录</button>
  </div>
</template>

<script>
export default {
  name: "my",
  data() {
    return {
      
    };
  },
};
</script>

<style scoped lang="less">
.my {
  height: calc(100vh - 100px);
  overflow-x: hidden;
  overflow-y: scroll;
  .top { 
    padding: 40px 0  0 30px;
    position: relative;
    height: 160px;
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
      top: 150px;
      border-radius: 0 0 50% 50%;
      background: #fcd537;
    }
    .left{
      position: relative;
      margin-right: 20px;
      img{
        width: 110px;
        height: 110px;
        border-radius: 100%;
      }
      span{
        position: absolute;
        bottom: 4px;
        left: 50%;
        white-space: nowrap;
        transform: translateX(-50%);
        color: #fff;
        padding: 6px;
        border-radius: 32px;
        background: #000;
        font-size: 20px;
      }
    }
    .phone{
      margin-top: 20px;
      font-size: 40px;
      flex: 1;
      text-align: left;
    }
    .renzhen{
      margin-top: 40px;
      padding: 10px 20px 10px 18px;
      background: #ffeeab;
      border-radius: 20px 0 0 20px;
      font-size: 26px;
    }
  }
  .menu{
    display: flex;
    position: relative;
    top: 0;
    z-index: 3;
    margin: 0 20px;
    background: #fff;
    margin-top: 30px;
    border-radius: 10px;
    justify-content: space-around;
    padding: 30px 0;
    li{
      display: flex;
      flex-direction: column;
      align-items: center;
      // justify-content: space-around;
      img{
        width: 70px;
        height: 70px;
        margin-bottom: 15px;
      }
    }
  }
  .vip{
    margin: 20px 20px;
    background: #000;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    .left{
      display: flex;
      align-items: center;
      img{
        width: 42px;
        height: 42px;
        margin-right: 10px;
      }
      span{
        color: #fff;
        font-size: 28px;
      }
    }
    button{
      padding: 10px 20px;
      background: transparent;
      border: 1px solid #fff;
      border-radius: 40px;
      color: #fff;
      font-size: 24px;
    }
  }
  .tools{
    margin: 0 20px 20px;
    background: #fff;
    border-radius: 10px;
    padding: 20px 0 20px 20px;
    .title{
      text-align: left;
      font-size: 30px;
      margin-bottom: 30px;
      span{
        width: 5px;
        height: 20px;
        display: inline-block;
        background: #fcd149;
        margin-right: 10px;
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
        margin-right: 100px;
        img{
          width: 70px;
          height: 70px;
          margin-bottom: 20px;
        }
      }
    }
  }
  .setting{
    margin: 0 20px 20px;
    background: #fff;
    border-radius: 10px;
    padding: 20px 0 20px 20px;
    .title{
      text-align: left;
      font-size: 30px;
      margin-bottom: 30px;
      span{
        width: 5px;
        height: 20px;
        display: inline-block;
        background: #fcd149;
        margin-right: 10px;
      }
    }
    ul{
      li{
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
        padding-right: 20px;
        &:last-child{
          margin-bottom: 0;
        }
        .left{
          display: flex;
          align-items: center;
          img{
            width: 28px;
            height: 28px;
            margin-right: 10px;
          }
          span{
            font-size: 26px;
          }
        }
      }
    }
  }
  &>button{
    width: 80%;
    height: 100px;
    font-size: 30px;
    background: #fcd43c;
    border: none;
    border-radius: 80px;
    margin-bottom: 50px;
  }
}
</style>
