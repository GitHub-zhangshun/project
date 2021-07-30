<template>
  <div class="loan">
    <div class="loan_title" :style="{backgroundImage:'url(http://static.zhynb.com/manager/bg/dae.png)'}">
      <span :class="flag?'active' : ''" @click="active='1',request(1)">急速贷</span>
      <span :class="!flag?'active' : ''" @click="active='2',request(2)">大额贷</span>
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
          <span>{{money}}</span>
          <span>&yen;</span>
        </div>
        <button class="right" :style="{backgroundColor:active==1?'#346FE4':'#FF8D4E'}" @click="$router.push('/step')">立即完善</button>
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
      <li class="flex_center_center" v-for="(item, index) in hotProduct" :key="index" @click="$router.push({path:'/productDetail',query:{id:item.id}})">
        <img :src="item.logo"/>
        <div class="name_range flex_center_center">
          <div class="name">
            <p>{{item.title}}</p>
            <div v-if="false">
              <img src="@/assets/images/huangguan.png" alt="">
              <span>会员专享</span>
            </div>
          </div>
          <p class="range">{{item.money_min}}万~{{item.money_max}}万</p>
        </div>
        <div class="right flex_center_center">
          <p>{{item.text}}</p>
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
      active:'1',
      hotProduct:[],
      ext:[],
      type:[
        {id:0,text:'未设置'},
        {id:1,text:'大额信用贷'},
        {id:2,text:'信用贷产品'},
        {id:3,text:'低息信用贷'},
        {id:4,text:'消费借贷'},
        {id:5,text:'信用分期贷'},
        {id:6,text:'极速分期贷'},
        {id:7,text:'极速消费贷'},
        {id:8,text:'消费生活贷'},
        {id:9,text:'消费分期贷'}
      ],
      money:JSON.parse(localStorage.getItem('userInfo')).money
    };
  },
  computed:{
    flag(){
      return this.active == '1'
    }
  },
  mounted() {
    this.request(this.active)
  },
  methods: {
    request(active){
      this.hotProduct = []
      this.ext = []
      this.$axios({
        method: "get",
        url: `/product/products?item=${active}&uid=${JSON.parse(localStorage.getItem('userInfo')).id}`,
        headers: {
          'time': new Date().getTime(),
          'sign': this.$md5(`${new Date().getTime()}jklhjg_`)
        },
      }).then((res) => {
        if(res.data.status == 200 ){
          res.data.data.forEach( item => {
            item.text = this.type.find(i => i.id == item.type).text
          })
          this.hotProduct = res.data.data
          this.ext = res.data.ext
        }
      })
    }
  },
};
</script>

<style scoped lang="less">
.loan {
  height: calc(100vh - 50px);
  overflow-y: scroll;
  background: #fff;
  .loan_title{
    height: 544/2.88px;
    background:  center center no-repeat;
    background-size: 100% 100%;
    border-radius: 0 0 20/2.88px 20/2.88px;
    text-align: left;
    padding-left: 90/2.88px;
    padding-top: 17/2.88px;
    box-sizing: border-box;
    span{
      font-size: 54/2.88px;
      color: #fff;
      padding-top: 17/2.88px;
      position: relative;
      &:first-child{
        margin-right: 40/2.88px;
      }
    }
    .active{
      padding-top: 0;
      font-size: 70/2.88px;
      font-weight: bold;
      &::after{
        content: "";
        height: 11/2.88px;
        width: 94/2.88px;
        background-color: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -20/2.88px;
        z-index: 1;
        border-radius: 8/2.88px;
      }
    }
  }
  .title{
    // margin-top: -15/2.88px;
    background-color: #ffffff;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 64/2.88px;
    padding-top: 60/2.88px;
    img{
      width: 39/2.88px;
      height: 39/2.88px;
    }
    p{
      font-size: 50/2.88px;
      padding: 0 34/2.88px;
    }
  }
  .product_banner{
    background: #fff;
    .top{
      padding: 0 147/2.88px 0 71/2.88px;
      display: flex;
      justify-content: space-between;
      .left{
        display: flex;
        align-items: center;
        img{
          width: 46/2.88px;
          height: 46/2.88px;
          margin-right: 10/2.88px;
        }
        p{
          font-size: 47/2.88px;
          font-weight: bold;
        }
      }
      .right{
        img{
          width: 174/2.44px;
          height: 65/2.44px;
        }
        
      }
    }
    .center{
      margin-top: 49/2.88px;
      display: flex;
      justify-content: space-between;
      padding: 0 103/2.88px 0 71/2.88px;
      margin-bottom: 46/2.88px;
      .left{
        span:first-child{
          font-size: 91/2.88px;
          font-weight: bold;
          color: #FF8D4E;
        }
        span:nth-of-type(2){
          font-size: 39/2.88px;
          font-weight: bold;
        }
      }
      .right{
        width: 258/2.88px;
        height: 80/2.88px;
        font-size: 38/2.88px;
        border-radius: 50/2.88px;
        border: none;
        color: #fff;
      }
    }
    &>p{
      padding-left: 71/2.88px;
      text-align: left;
      font-size: 35/2.44px;
      padding-bottom: 77/2.88px;
    }
  }
  .daikuan{
    background-color: #ffffff;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 64/2.88px;
    padding-top: 60/2.88px;
    img{
      width: 39/2.88px;
      height: 39/2.88px;
    }
    p{
      font-size: 50/2.88px;
      padding: 0 34/2.88px;
    }
  }
  .product_list{
    padding: 0 44/2.88px  43/2.44px;
      background-color: #ffffff;
      li{
        padding:  19/2.88px 33/2.88px 21/2.44px;
        box-shadow: 0/2.88px 2/2.88px 15/2.88px 0/2.88px rgba(35,24,21,0.1);
        border-radius: 10px;
        margin-bottom: 13/2.88px;
        img{
          width: 115/2.88px;
          height: 115/2.88px;
          border-radius: 20/2.88px;
        }
        .name_range{
          flex: 1;
          margin-left: 34/2.88px;
          flex-direction: column;
          align-items: flex-start;
          .name{
            width: 100%;
            display: flex;
            align-items: flex-start;
            p{
              font-size: 45/2.88px;
              margin-bottom: 17/2.88px;
              width: 70%;
              text-align: left;
            }
            &>div{
              width: 160/2.44px;
              height: 42/2.44px;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #353633;
              border-radius: 42/2.44px;
              img{
                width: 23/2.44px;
                height: 23/2.44px;
              }
              span{
                color: #ffffff;
                font-size: 19/2.44px;
              }
            }
          }
          .range{
            color: #E91018;
            font-size: 36/2.88px;
          }
        }
        .right{
          p{
            margin-right: 48/2.88px;
            font-size: 40/2.88px;
            color: #999999;
          }
        }
      }
  }
}
</style>
