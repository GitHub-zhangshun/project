<template>
  <div class="step">
    <ul class="step_ul">
      <li>
        <div class="blue">
          <img src="@/assets/images/1.png" alt="">
        </div>
        <span class="color000">实名认证</span>
      </li>
      <li>
        <div :class="step===1 || step===2?'blue':''">
          <img src="@/assets/images/2_1.png" alt="" v-if="step===1 || step===2">
          <img src="@/assets/images/2.png" alt="" v-else>
        </div>
        <span :class="step===1 || step===2?'color000':''">确认贷款信息</span>
      </li>
      <li>
        <div :class="step===2?'blue':''">
          <img src="@/assets/images/3_1.png" alt="" v-if="step===2">
          <img src="@/assets/images/3.png" alt="" v-else>
        </div>
        <span :class="step===2?'color000':''">审核放款</span>
      </li>
    </ul>
    <p class="tips">
      <img src="@/assets/images/AI.png" alt="">
      <span v-if="step==0">小用AI:耐心填完资料,才能获得低利率的贷款</span>
      <span v-if="step==1">小用AI:恶意填写虚假资料,可能影响您的信用</span>
    </p>
    <div class="bottom">
      <div class="step_1" v-if="step==0">
        <ul class="problem">
          <li>
            <span>真实姓名</span>
            <input type="text" v-model="name_value" placeholder="请输入姓名">
          </li>
          <li>
            <span>身份证号</span>
            <input type="text" v-model="icard_value" placeholder="请输入身份证号">
          </li>
          <li>
            <span>职业类别</span>
            <div>
              <input type="text" :value="zhiye_value" placeholder="请选择" readonly @click="popupClick('zhiye')">
              <van-icon name="play" />
            </div>
            
          </li>
          <li v-if="zhiye_value=='上班族' || zhiye_value=='事业单位/公务员'">
            <span>工资发放形式</span>
            <div>
              <input type="text" :value="gongzi_value" placeholder="请选择" readonly @click="popupClick('gongzi')">
              <van-icon name="play" />
            </div>
          </li>
          <li v-if="zhiye_value=='上班族' || zhiye_value=='事业单位/公务员'">
            <span>现单位工龄</span>
            <div>
              <input type="text" :value="gongling_value" placeholder="请选择" readonly @click="popupClick('gongling')">
              <van-icon name="play" />
            </div>
          </li>
          <li v-if="zhiye_value=='企业主' || zhiye_value=='个体户'">
            <span>营业执照注册年限</span>
            <div>
              <input type="text" :value="nianxian_value" placeholder="请选择" readonly @click="popupClick('nianxian')">
              <van-icon name="play" />
            </div>
          </li>
          

          
          <li v-if="zhiye_value=='企业主'">
            <span>对公账户经营收入</span>
            <div>
              <input type="text" v-model="duigong_value" placeholder="请输入">
              <span>万元/月</span>
            </div>
            
          </li>
          <li v-if="zhiye_value=='企业主' || zhiye_value=='个体户'">
            <span>近一年月均经营流水</span>
            <div>
              <input type="text" v-model="yuejun_value" placeholder="请输入">
              <span>万元/月</span>
            </div>
          </li>
          <li v-if="zhiye_value=='上班族' || zhiye_value=='个体户' || zhiye_value=='自由职业' || zhiye_value=='事业单位/公务员'">
            <span>月收入</span>
            <div>
              <input type="text" :value="shouru_value" placeholder="请选择" readonly @click="popupClick('shouru')">
              <van-icon name="play" />
            </div>
          </li>


          <li>
            <span>所在城市</span>
            <div>
              <input type="text" placeholder="请选择" :value="area_value" readonly @click="areaPopup = true">
              <van-icon name="play" />
            </div>
          </li>
        </ul>
        <button>下一步</button>
      </div>
      <div class="step_2" v-if="step==1">
        <ul class="top">
          <li>
            <div class="title">借多少(5-100万元)</div>
            <div class="bottom">
              <div class="input">
                <input type="text">万元
              </div>
              <img src="@/assets/images/bianji.png" alt="">
            </div>
            
          </li>
          <li>
            <div class="title">借多久(3-60个月)</div>
            <div class="bottom">
              <div class="input">
                <input type="text" style="border-bottom: 1px solid #fc7513;" readonly>个月
              </div>
              <span class="icon iconfont icon-arrow-right"></span>
            </div>
            
          </li>
        </ul>
        <ul class="problem">
          <li>
            <span>真实姓名</span>
            <input type="text" v-model="name_value" placeholder="请输入姓名">
          </li>
        </ul>
      </div>
      <div class="bottom_tips">
        <img src="@/assets/images/dun.png" alt="">
        <span>数据加密保护已启动,仅用于贷款申请,请放心填写</span>
      </div>
    </div>

    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        item-height="10vw"
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <van-popup v-model="areaPopup" round position="bottom">
      <van-area title="标题" item-height="10vw" :columns-num="2" :area-list="dizhi" @cancel="areaPopup = false" @confirm="areaValue"/>
    </van-popup>
  </div>
</template>

<script>
import { Popup , Picker ,Icon , Area  } from 'vant';
import { areaList } from '@vant/area-data';
  export default {
    name:'step',
    components:{
      [Popup.name]:Popup,
      [Picker.name]:Picker,
      [Icon.name]:Icon,
      [Area.name]:Area,
    },
    data() {
      return {
        step:1,
        type:null,
        showPicker: false,
        areaPopup:false,
        columns: null,
        name_value:'',
        icard_value:'',
        zhiye:['上班族','企业主','个体户','自由职业','事业单位/公务员'],
        zhiye_value:'',

        gongzi:['银行代发','现金','微信/支付宝'],
        gongzi_value:'',

        gongling:['0-6个月','6-12个月','12个月以上'],
        gongling_value:'',

        shouru:['3000-5000','5000-8000','8000-10000','10000以上'],
        shouru_value:'',

        nianxian:['无执照','注册1年一下','注册1-5年','注册5年以上'],
        nianxian_value:'',

        duigong_value:'',
        yuejun_value:'',
        dizhi:areaList,
        area_value:''
      }
    },
    watch:{
      type(){
        this.columns = this[this.type]
      }
    },
    methods: {
      popupClick(type){
        this.type = type
        this.showPicker = true
      },
      onConfirm(value) {
        this[`${this.type}_value`] = value
        this.showPicker = false;
      },
      areaValue(value){
        this.area_value = value[0].name + value[1].name
        this.areaPopup = false
      },
    },
  }
</script>

<style lang="less" scoped>
.step{
  background: #fff;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 87/2.44px;
  text-align: left;
  .step_ul{
    padding: 0 102/2.44px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 80/2.44px;
    li{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      &>div{
        width: 92/2.44px;
        height: 92/2.44px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #d6d6d6;
        border-radius: 100%;
        margin-bottom: 20/2.44px;
        position: relative;
        &::after{
          content: "";
          height: 6/2.44px;
          width: 226%;
          background: #e0e0e0;
          position: absolute;
          right:92/2.44px;
          top:50%;
          transform: translateY(-50%);
        }
        img{
          width: 49/2.44px;
          height: 49/2.44px;
        }
      }
      span{
        font-size: 28/2.44px;
        color: #d6d6d6;
      }
      .color000{
        color:#000000;
      }
      &:first-child{
        &>div{
          &::after{
            width: 0;
          }
        }
      }
      .blue{
        background: #3b95dc;
        &::after{
          background: #3b95dc;
        }
      }
    }
  }
  .tips{
    padding-left: 132/2.44px;
    display: flex;
    align-items: center;
    margin-bottom: 85/2.44px;
    img{
      width: 48/2.44px;
      height: 48/2.44px;
      margin-right: 20/2.44px;
    }
    span{
      font-size: 30/2.44px;
    }
  }
  &>.bottom{
    height: calc(100vh - 181px);
    overflow-y: scroll;
    .step_1{
      display: flex;
      flex-direction: column;
      align-items: center;
      .problem{
        width: 100%;
        box-sizing: border-box;
        padding: 0 60/2.44px 87/2.44px;
        li{
          display: flex;
          justify-content: space-between;
          span{
            font-size: 36/2.44px;
          }
          margin-bottom: 50/2.44px;
          &:last-child{
            margin-bottom: 0;
          }
          &>input{
            font-size: 36/2.44px;
            text-align: right;
            border: none;
            width: 400/2.44px;
          }
          &>div{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            input{
              width: 300/2.44px;
              font-size: 36/2.44px;
              text-align: right;
              border: none;
            }
            i{
              transform: rotate(90deg);
            }
          }
        }
      }
      button{
        width: 95%;
        height: 132/2.44px;
        margin: 0 auto;
        border-radius: 132/2.44px;
        border: none;
        background: #4399e5;
        color: #ffffff;
        font-size: 42/2.44px;
      }
    }
    .step_2{
      display: flex;
      flex-direction: column;
      align-items: center;
      &>.top{
        width: 100%;
        padding: 0 66/2.44px 96/2.44px 60/2.44px;
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        li{
          width: 35%;
          .title{
            font-size: 33/2.44px;
            font-weight: bold;
            margin-bottom: 28/2.44px;
          }
          .bottom{
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            .input{
              display: flex;
              align-items: baseline;
              color: #fc7513;
              font-size: 32/2.44px;
              input{
                font-size: 64/2.44px;
                font-weight: bold;
                width: 50%;
                border: none;
                // color: #fc7513;
              }
            }
            img{
              width: 39/2.44px;
              height: 39/2.44px;
            }
            span{
              color: #c3c3c3;
            }
            
          }
        }
      }
      .problem{
        width: 100%;
        box-sizing: border-box;
        padding: 0 60/2.44px 87/2.44px;
        li{
          display: flex;
          justify-content: space-between;
          span{
            font-size: 36/2.44px;
          }
          margin-bottom: 50/2.44px;
          &:last-child{
            margin-bottom: 0;
          }
          &>input{
            font-size: 36/2.44px;
            text-align: right;
            border: none;
            width: 400/2.44px;
          }
          &>div{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            input{
              width: 300/2.44px;
              font-size: 36/2.44px;
              text-align: right;
              border: none;
            }
            i{
              transform: rotate(90deg);
            }
          }
        }
      }
      button{
        width: 95%;
        height: 132/2.44px;
        margin: 0 auto;
        border-radius: 132/2.44px;
        border: none;
        background: #4399e5;
        color: #ffffff;
        font-size: 42/2.44px;
      }
    }
    .bottom_tips{
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 44/2.44px;
        height: 44/2.44px;
        margin-right: 10/2.44px;
      }
      span{
        font-size: 32/2.44px;
      }
    }
  }
}
</style>