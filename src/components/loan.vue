<template>
  <div class="loan">
    <div class="loan_title" :style="{backgroundImage:'url(https://img1.baidu.com/it/u=1257639984,1809454588&fm=26&fmt=auto&gp=0.jpg)'}">
      <span :class="flag?'active' : ''" @click="active='1'">急速贷</span>
      <span :class="!flag?'active' : ''" @click="active='2'">大额贷</span>
    </div>
    <div class="title">
      <img src="@/assets/images/xinhao3.png" alt="" v-if="active=='1'"/>
      <img src="@/assets/images/xinhao5.png" alt="" v-else/>
      <p>智能AI推荐</p>
      <img src="@/assets/images/xinhao4.png" alt="" v-if="active=='1'"/>
      <img src="@/assets/images/xinhao6.png" alt="" v-else/>
    </div>
    <div class="product_banner">
      <div class="top">
        <div class="left">
          <img src="@/assets/images/gou.png" alt="">
          <p>恭喜您的预审已通过</p>
        </div>
        <div class="right">
          <img src="@/assets/images/edu.png" alt="" v-if="active=='1'">
          <img src="@/assets/images/edu1.png" alt="" v-else>
        </div>
      </div>
      <div class="center">
        <div class="left">
          <span>1231321</span>
          <span>&yen;</span>
        </div>
        <button class="right" :style="{backgroundColor:active==1?'#346FE4':'#FF8D4E'}">立即完善</button>
      </div>
      <p>完善资料最高可激活</p>
    </div>
    <div class="daikuan">
      <img src="@/assets/images/xinhao3.png" alt="" v-if="active=='1'"/>
      <img src="@/assets/images/xinhao5.png" alt="" v-else/>
      <p>热门贷款</p>
      <img src="@/assets/images/xinhao4.png" alt="" v-if="active=='1'"/>
      <img src="@/assets/images/xinhao6.png" alt="" v-else/>
    </div>
    <ul class="product_list">
      <li class="flex_center_center" v-for="(item, index) in 5" :key="index">
        <img
          src="https://img1.baidu.com/it/u=1257639984,1809454588&fm=26&fmt=auto&gp=0.jpg"/>
        <div class="name_range flex_center_center">
          <div class="name">
            <p>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
            <div>
              <img src="@/assets/images/huangguan.png" alt="">
              <span>会员专享</span>
            </div>
          </div>
          <p class="range">1万~3万</p>
        </div>
        <div class="right flex_center_center">
          <p>消费借贷</p>
          <span class="icon iconfont icon-arrow-right"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "loan",
  data() {
    return {
      active:'1'
    };
  },
  computed:{
    flag(){
      return this.active == '1'
    }
  },
};
</script>

<style scoped lang="less">
.loan {
  height: calc(100vh - 100px);
  overflow-y: scroll;
  .loan_title{
    height: 300px;
    background:  center center no-repeat;
    background-size: 100% 100%;
    border-radius: 0 0 20px 20px;
    text-align: left;
    padding-left: 30px;
    padding-top: 20px;
    box-sizing: border-box;
    span{
      font-size: 30px;
      color: #fff;
      padding-top: 10px;
      position: relative;
      &:first-child{
        margin-right: 40px;
      }
    }
    .active{
      padding-top: 0;
      font-size: 40px;
      font-weight: bold;
      &::after{
        content: "";
        height: 8px;
        width: 70px;
        background-color: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -20px;
        z-index: 1;
        border-radius: 8px;
      }
    }
  }
  .title{
    background-color: #ffffff;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 30px;
    padding-top: 30px;
    img{
      width: 20px;
      height: 20px;
    }
    p{
      font-size: 30px;
      padding: 0 10px;
    }
  }
  .product_banner{
    background: #fff;
    .top{
      padding: 0 100px 0 50px;
      display: flex;
      justify-content: space-between;
      .left{
        display: flex;
        align-items: center;
        img{
          width: 30px;
          height: 30px;
          margin-right: 10px;
        }
        p{
          font-size: 24px;
          font-weight: bold;
        }
      }
      .right{
        img{
          width: 100%;
        }
        
      }
    }
    .center{
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      padding: 0 70px 0 50px;
      margin-bottom: 10px;
      .left{
        span:first-child{
          font-size: 50px;
          font-weight: bold;
          color: #FF8D4E;
        }
        span:nth-of-type(2){
          font-size: 30px;
          font-weight: bold;
        }
      }
      .right{
        width: 160px;
        height: 50px;
        font-size: 24px;
        border-radius: 50px;
        border: none;
        color: #fff;
      }
    }
    &>p{
      padding-left: 50px;
      text-align: left;
      padding-bottom: 50px;
    }
  }
  .daikuan{
    background-color: #ffffff;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 30px;
    border: none;
    img{
      width: 20px;
      height: 20px;
    }
    p{
      font-size: 30px;
      padding: 0 10px;
    }
  }
  .product_list{
    padding: 25px;
    background-color: #ffffff;
    li{
      padding:  10px 20px;
      box-shadow: 0px 2px 15px 0px rgba(35,24,21,0.1);
      border-radius: 16px;
      margin-bottom: 30px;
      img{
        width: 80px;
        height: 80px;
        border-radius: 20px;
      }
      .name_range{
        flex: 1;
        margin-left: 20px;
        flex-direction: column;
        align-items: flex-start;
        .name{
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          &>p{
            font-size: 28px;
            max-width: 70%;
            text-align: left;
            margin-right: 20px;
          }
          &>div{
            display: flex;
            align-items: center;
            padding: 5px 10px;
            background: rgb(59, 59, 59);
            border-radius: 13px;
            img{
              width: 20px;
              height: 20px;
              margin-right: 8px;
              vertical-align: top;
            }
            span{
              font-size: 14px;
              color: #fff;
            }
          }
        }
        .range{
          color: #E91018;
          font-size: 26px;
        }
      }
      .right{
        p{
          margin-right: 20px;
          font-size: 24px;
          color: #999999;
        }
      }
    }
  }
}
</style>
