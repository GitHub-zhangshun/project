<template>
  <div class="productDetail">
    <div class="top_bg_img"></div>
    <div class="info">
      <div class="top">
        <div class="product_img">
          <img :src="detail.logo" alt="">
        </div>
        <div class="product_title">
          <p class="title">{{detail.title}}</p>
          <p class="number">{{detail.person}}人已申请</p>
        </div>
      </div>
      <div class="detail_info">
        <div class="number_time">
          <div class="number">
            <p>借多少({{detail.money_min}}-{{detail.money_max}}{{detail.money_unit}})</p>
            <div class="input">
              <div class="left">
                <input type="text" v-model="jds">
                <span>{{detail.money_unit}}</span>
              </div>
              <div class="right">
                <img src="@/assets/images/bianji1.png" alt="">
              </div>
            </div>
          </div>
          <div class="time">
            <p>借多久({{detail.month_min}}-{{detail.month_max}}{{detail.month_unit}})</p>
            <div class="input">
              <div class="left">
                <input type="text" v-model="jdj">
                <span>{{detail.month_unit}}</span>
              </div>
              <div class="right">
                <span class="icon iconfont icon-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul>
        <li>
          <p>参考月费率</p>
          <p>{{detail.rate}}<span>{{detail.rate_unit}}</span></p>
        </li>
        <li>
          <p>参考月利息</p>
          <p>{{lv}}<span>元</span></p>
        </li>
        <li>
          <p>参考月还款</p>
          <p>{{hk}}<span>元</span></p>
        </li>
      </ul>
    </div>
    <ul class="condition">
      <li>
        <p><span></span>申请条件</p>
        <p v-for="(item,index) in detail.premis_text" :key="index">{{item}}</p>
      </li>
      <li>
        <p><span></span>所需资料</p>
        <p v-for="(item,index) in detail.material_text" :key="index">{{item}}</p>
      </li>
    </ul>
    <div class="apply">
      <p><span></span>申请流程</p>
      <ul>
        <li>
          <p>1</p>
          <p>注册下载app</p>
        </li>
        <li>
          <p>2</p>
          <p>线上提交资料</p>
        </li>
        <li>
          <p>3</p>
          <p>绑定银行卡</p>
        </li>
        <li>
          <p>4</p>
          <p>审批放款</p>
        </li>
      </ul>
    </div>
    <van-button round type="info" color="#ffd437">圆形按钮</van-button>
  </div>
</template>

<script>
import { Button , Toast} from 'vant';
  export default {
    name:'productDetail',
    components:{
      [Button.name]:Button,
      [Toast.name]:Toast,
    },
    data(){
      return{
        jdj:'',
        jds:'',
        lv:0,
        hk:0,
        detail:''
      }
    },
    watch:{
      jdj(){

      },
      jds(){
        
      }
    },
    mounted(){
      this.$axios({
        method: "get",
        url: `/product/detail`,
        params:{
          id:this.$route.query.id,
          uid:JSON.parse(localStorage.getItem('userInfo')).id
        }
      }).then((res) => {
        if(res.data.status == 200 ){
          res.data.data['premis_text'] = res.data.data.premise.split(',')
          res.data.data['material_text'] = res.data.data.material.split(',')
          this.detail = res.data.data
          this.jdj = res.data.data.month_min
          this.jds = res.data.data.money_min
        }else{
          Toast(res.data.msg)
        }
      })
    }
  }
</script>

<style lang="less" scoped>
.productDetail{
  min-height: 100vh;
  background: #fff;
  .top_bg_img{
    height: 460/2.44px;
    background: url('https://t7.baidu.com/it/u=3691080281,11347921&fm=193&f=GIF') center center no-repeat;
    background-size: 100% 100%;
  }
  .info{
    box-shadow: 0 2/2.88px 30/2.88px 0 rgba(35,24,21,0.5);
    background: #fff;
    border-radius: 20/2.44px;
    margin: -423/2.44px 32/2.44px 88/2.44px;
    .top{
      padding: 32/2.44px;
      display: flex;
      border-bottom: 1/2.44px solid #e2e2e2;
      .product_img{
        width: 115/2.55px;
        height: 115/2.55px;
        border-radius: 30/2.44px;
        overflow: hidden;
        margin-right: 34/2.44px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .product_title{
        padding: 15/2.44px 0 10/2.44px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        .title{
          font-size: 48/2.44px;
          color: #000;
        }
        .number{
          font-size: 36/2.44px;
          color: #a9a6a7;
        }
      }
    }
    .detail_info{
      padding: 42/2.44px 32/2.44px 65/2.44px 44/2.44px;
      .number_time{
        display: flex;
        justify-content: space-between;
        .number,.time{
          p{
            font-size: 40/2.44px;
            color: #878787;
            margin-bottom: 74/2.44px;
          }
          .input{
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            .left{
              input{
                font-size: 76/2.44px;
                width: 130/2.44px;
                border: none;
                padding-bottom: 35/2.44px;
                border-bottom: 5/2.44px solid #ce9452;
                margin-right: 14/2.44px;
                color: #db8c4a;
                text-align: center;
              }
              span{
                font-size: 36/2.44px;
                color: #db8c4a;
              }
            }
            .right{
              img{
                width: 38/2.44px;
                height: 38/2.44px;
              }
            }
          }
        }
      }
    }
    ul{
      display: flex;
      padding: 0 70/2.44px 44/2.44px;
      justify-content: space-between;
      li{
        p:first-child{
          font-size: 40/2.44px;
          margin-bottom: 30/2.44px;
        }
        p:nth-of-type(2){
          font-size: 48/2.44px;
          font-weight: bold;
          span{
            margin-left: 10/2.44px;
            font-weight: normal;
            font-size: 34/2.44px;
          }
        }
      }
    }
  }
  .condition{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 44/2.44px;
    li{
      padding-left: 44/2.44px;
      text-align: left;
      p:first-child{
        font-size: 50/2.44px;
        margin-bottom: 74/2.44px;
        span{
          display: inline-block;
          width: 32/2.44px;
          height: 32/2.44px;
          background: #f7d938;
          border-radius: 100%;
          margin-right: 16/2.44px;
        }
      }
      P{
        font-size: 43/2.44px;
        margin-bottom: 36/2.44px;
      }
      p:last-child{
        margin-bottom: 74/2.44px;
      }
    }
    li:last-child{
      p:last-child{
        margin-bottom: 0;
      }
    }
  }
  .apply{
    background: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 96/2.44px;
    &>p{
      box-sizing: border-box;
      width: 100%;
      text-align: left;
      margin-top: 30/2.44px;
      background: #fff;
      padding: 68/2.44px 44/2.44px;
      font-size: 50/2.44px;
      span{
        display: inline-block;
          width: 32/2.44px;
          height: 32/2.44px;
          background: #f7d938;
          border-radius: 100%;
          margin-right: 16/2.44px;
      }
    }
    ul{
      box-sizing: border-box;
      padding: 50/2.44px 28/2.44px 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      background: #fff;
      li{
        display: flex;
        flex-direction: column;
        align-items: center;
        p:first-child{
          width: 90/2.44px;
          height: 90/2.44px;
          border-radius: 100%;
          border: 6/2.44px solid #afafaf;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 38/2.44px;
          color: #afafaf;
          margin-bottom: 28/2.44px;
          position: relative;
          z-index: 2;
          background: #fff;
          &::after{
            z-index: 1;
            content: "";
            width: 180%;
            border-bottom: 2px dashed #afafaf;
            position: absolute;
            left: 90/2.44px;
            top: 50%;
            transform: translateY(-50%);
            // background: #afafaf;
          }
        }
        p:nth-of-type(2){
          font-size: 32/2.44px;
          color: #afafaf;
        }
      }
      li:last-child{
        p:first-child{
          &::after{
            width: 0;
          }
        }
      }
    }
  }
  .van-button{
    margin-bottom: 54/2.44px;
    width: 90%;
    .van-button__content{
      .van-button__text{
        color: #000;
      }
    }
  }
}
</style>