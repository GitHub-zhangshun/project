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
    <p class="tips" v-if="step!==2">
      <img src="@/assets/images/AI.png" alt="">
      <span v-if="step==0">小花AI:耐心填完资料,才能获得低利率的贷款</span>
      <span v-if="step==1">小花AI:恶意填写虚假资料,可能影响您的信用</span>
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
        <button @click="next(1)">下一步</button>
      </div>
      <div class="step_2" v-if="step==1">
        <ul class="top">
          <li>
            <div class="title">借多少(5-100万元)</div>
            <div class="bottom">
              <div class="input">
                <input type="text" v-model="jds_value">万元
              </div>
              <img src="@/assets/images/bianji.png" alt="">
            </div>
            
          </li>
          <li>
            <div class="title">借多久(3-60个月)</div>
            <div class="bottom">
              <div class="input">
                <input v-model="jdj_value" type="text" @click="popupClick('jdj')" style="border-bottom: 1px solid #fc7513;" readonly>个月
              </div>
              <span class="icon iconfont icon-arrow-right"></span>
            </div>
            
          </li>
        </ul>
        <ul class="personal_info">
          <li style="justify-content: flex-start;">
            <img src="@/assets/images/caidan.png" alt="">
            <p>个人信息</p>
          </li>
          <li>
            <span>文化程度</span>
            <div>
              <input type="text" :value="whcd_value" placeholder="请选择" readonly @click="popupClick('whcd')">
              <van-icon name="play" />
            </div>
          </li>
          <li>
            <span>借款用途</span>
            <div>
              <input type="text" :value="jkyt_value" placeholder="请选择" readonly @click="popupClick('jkyt')">
              <van-icon name="play" />
            </div>
          </li>
        </ul>
        <ul class="personal_info">
          <li style="justify-content: flex-start;">
            <img src="@/assets/images/caidan.png" alt="">
            <p>资产信息</p>
          </li>
          <li>
            <span>社保缴纳</span>
            <div>
              <input type="text" :value="sbjn_value" placeholder="请选择" readonly @click="popupClick('sbjn')">
              <van-icon name="play" />
            </div>
          </li>
          <li>
            <span>公积金缴纳</span>
            <div>
              <input type="text" :value="gjjjn_value" placeholder="请选择" readonly @click="popupClick('gjjjn')">
              <van-icon name="play" />
            </div>
          </li>
          <li>
            <span>房产情况</span>
            <div>
              <input type="text" :value="fcqk_value" placeholder="请选择" readonly @click="popupClick('fcqk')">
              <van-icon name="play" />
            </div>
          </li>
          <li>
            <span>全款房</span>
            <div>
              <input type="text" :value="qkf_value" placeholder="请选择" readonly @click="popupClick('qkf')">
              <van-icon name="play" />
            </div>
          </li>
          <li>
            <span>车辆情况</span>
            <div>
              <input type="text" :value="clqk_value" placeholder="请选择" readonly @click="popupClick('clqk')">
              <van-icon name="play" />
            </div>
          </li>
          <li>
            <span>全款车</span>
            <div>
              <input type="text" :value="qkc_value" placeholder="请选择" readonly @click="popupClick('qkc')">
              <van-icon name="play" />
            </div>
          </li>
          <li>
            <span>保单情况</span>
            <div>
              <input type="text" :value="bdqk_value" placeholder="请选择" readonly @click="popupClick('bdqk')">
              <van-icon name="play" />
            </div>
          </li>
          <li>
            <span>微粒贷额度</span>
            <div>
              <input type="text" :value="wlded_value" placeholder="请选择" readonly @click="popupClick('wlded')">
              <van-icon name="play" />
            </div>
          </li>
        </ul>
        <ul class="personal_info">
          <li style="justify-content: flex-start;">
            <img src="@/assets/images/caidan.png" alt="">
            <p>信用信息</p>
          </li>
          <li>
            <span>信用卡总额度</span>
            <div>
              <input type="text" :value="xykzed_value" placeholder="请选择" readonly @click="popupClick('xykzed')">
              <van-icon name="play" />
            </div>
          </li>
          <li>
            <span>芝麻分</span>
            <div>
              <input type="text" :value="zmf_value" placeholder="请选择" readonly @click="popupClick('zmf')">
              <van-icon name="play" />
            </div>
          </li>
          <li>
            <span>逾期情况</span>
            <div>
              <input type="text" :value="yqqk_value" placeholder="请选择" readonly @click="popupClick('yqqk')">
              <van-icon name="play" />
            </div>
          </li>
        </ul>
        <button @click="next(2)">下一步</button>
      </div>
      <div class="step_3" v-if="step==2">
        <img src="@/assets/images/chengong.png" alt="">
        <span>信息提交成功，正在审核中</span>
        <button @click="next(3)">确定</button>
      </div>
      <div class="bottom_tips" v-if="step!==2">
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
import { Popup , Picker ,Icon , Area , Toast  } from 'vant';
import { areaList } from '@vant/area-data';
  export default {
    name:'step',
    components:{
      [Popup.name]:Popup,
      [Picker.name]:Picker,
      [Icon.name]:Icon,
      [Area.name]:Area,
      [Toast.name]:Toast,
    },
    data() {
      return {
        url:this.$route.query.url,
        step:0,
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
        area_value:'',
        jds_value:'5',

        jdj:['3','6','12','24','36','60'],
        jdj_value:'3',

        whcd:['小学','初中','高中','中专','专科','本科','博士研究生'],
        whcd_value:'',

        jkyt:['日常消费','医疗借款','装修借款','购房','购车','结婚借款','旅游借款'],
        jkyt_value:'',

        sbjn:['无社保','未满六个月','六个月以上'],
        sbjn_value:'',

        gjjjn:['无公积金','未满六个月','六个月以上'],
        gjjjn_value:'',

        fcqk:['无房产','按揭房','全款房'],
        fcqk_value:'',

        qkf:['接受抵押','不接受抵押'],
        qkf_value:'',

        clqk:['全款车','按揭车','全款车'],
        clqk_value:'',

        qkc:['接受抵押','不接受抵押'],
        qkc_value:'',

        bdqk:['未买保险','缴纳未满1年','缴纳1年以上'],
        bdqk_value:'',

        wlded:['无微粒贷','5000以下','5000以上'],
        wlded_value:'',

        xykzed:['无信用卡','3千-5千','5千-1万','1万-2万','2万-3万','3万以上'],
        xykzed_value:'',

        zmf:['无芝麻分','600以下','600-649分','650-700分','700分以上'],
        zmf_value:'',

        yqqk:['无信用记录','信用良好无逾期','1年内无逾期','1年内有逾期','信用卡或贷款存在当前逾期'],
        yqqk_value:'',
      }
    },
    watch:{
      type(){
        this.columns = this[this.type]
      }
    },
    methods: {
      next(val){
        if(val == 1){
          if(this.name_value == ''){
            Toast('请输入姓名');
            return
          }
          if(this.icard_value == '' || !( /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/).test(this.icard_value)){
            Toast('请输入正确身份证号');
            return
          }
          if(this.zhiye_value == ''){
            Toast('请选择职业类别');
            return
          }
          if(this.zhiye_value == '上班族' || this.zhiye_value == '事业单位/公务员'){
            if(this.gongzi_value == ''){
              Toast('请选择工资发放形式');
              return
            }
          }
          if(this.zhiye_value == '上班族' || this.zhiye_value == '事业单位/公务员'){
            if(this.gongling_value == ''){
              Toast('请选择现单位工龄');
              return
            }
          }
          if(this.zhiye_value == '上班族' || this.zhiye_value == '个体户' || this.zhiye_value == '自由职业' || this.zhiye_value == '事业单位/公务员'){
            if(this.shouru_value == ''){
              Toast('请选择月收入');
              return
            }
          }
          if(this.zhiye_value == '企业主' || this.zhiye_value == '个体户'){
            if(this.nianxian_value == ''){
              Toast('请选择营业执照注册年限');
              return
            }
          }
          if(this.zhiye_value == '企业主'){
            if(this.duigong_value == ''){
              Toast('请输入对公账户经营收入');
              return
            }
          }
          if(this.zhiye_value == '企业主' || this.zhiye_value == '个体户'){
            if(this.yuejun_value == ''){
              Toast('请输入近一年月均经营流水');
              return
            }
          }
          if(this.area_value == ''){
            Toast('请选择所在城市');
            return
          }
          this.step = 1
        }
        if(val == 2){
          if(this.jds_value == ''){
            Toast('请输入借多少');
            return
          }
          if(this.jdj_value == ''){
            Toast('请选择借多久');
            return
          }
          if(this.whcd_value == ''){
            Toast('请选择文化程度');
            return
          }
          if(this.jkyt_value == ''){
            Toast('请选择借款用途');
            return
          }
          if(this.sbjn_value == ''){
            Toast('请选择社保缴纳');
            return
          }
          if(this.gjjjn_value == ''){
            Toast('请选择公积金缴纳');
            return
          }
          if(this.fcqk_value == ''){
            Toast('请选择房产情况');
            return
          }
          if(this.qkf_value == ''){
            Toast('请选择全款房');
            return
          }
          if(this.clqk_value == ''){
            Toast('请选择车辆情况');
            return
          }
          if(this.qkc_value == ''){
            Toast('请选择全款车');
            return
          }
          if(this.bdqk_value == ''){
            Toast('请选择保单情况');
            return
          }
          if(this.wlded_value == ''){
            Toast('请选择微粒贷额度');
            return
          }
          if(this.xykzed_value == ''){
            Toast('请选择信用卡总额度');
            return
          }
          if(this.zmf_value == ''){
            Toast('请选择芝麻分');
            return
          }
          if(this.yqqk_value == ''){
            Toast('请选择逾期情况');
            return
          }
          let params = {
            name_value:this.name_value,
            icard_value:this.icard_value,
            zhiye_value:this.zhiye_value,
            gongzi_value:this.gongzi_value,
            gongling_value:this.gongling_value,
            shouru_value:this.shouru_value,
            nianxian_value:this.nianxian_value,
            duigong_value:this.duigong_value,
            yuejun_value:this.yuejun_value,
            area_value:this.area_value,
            jds_value:this.jds_value,
            jdj_value:this.jdj_value,
            whcd_value:this.whcd_value,
            jkyt_value:this.jkyt_value,
            sbjn_value:this.sbjn_value,
            gjjjn_value:this.gjjjn_value,
            fcqk_value:this.fcqk_value,
            qkf_value:this.qkf_value,
            clqk_value:this.clqk_value,
            qkc_value:this.qkc_value,
            bdqk_value:this.bdqk_value,
            wlded_value:this.wlded_value,
            xykzed_value:this.xykzed_value,
            zmf_value:this.zmf_value,
            yqqk_value:this.yqqk_value,
          }
          this.$axios({
            method: "post",
            url: `/user/ext`,
            data:{
              ...params,
              uid:JSON.parse(localStorage.getItem('userInfo')).id
            },
            headers: {
              'time': new Date().getTime(),
              'sign': this.$md5(`${new Date().getTime()}jklhjg_`)
            },
          }).then((res) => {
            if(res.data.status == 200 ){
              this.step = 2
            }else{
              Toast(res.data.msg)
            }
          })
        }
        if(val == 3){
          if(this.url){
            window.location.href = this.url
            return
          }
          this.$router.push('/')
        }
      },
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
        font-size: 34/2.44px;
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
                text-align: center;
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
      .personal_info{
        width: 100%;
        box-sizing: border-box;
        padding: 0 60/2.44px 87/2.44px;
        li{
          display: flex;
          justify-content: space-between;
          align-items: center;
          img{
            width: 36/2.44px;
            height: 36/2.44px;
            margin-right: 10/2.44px;
          }
          &>P{
            font-size: 44/2.44px;
          }
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
        margin-bottom: 20/2.44px;
        font-size: 34/2.44px;
      }
    }
    .step_3{
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img{
        width: 200/2.44px;
        height: 200/2.44px;
        margin-bottom: 20/2.44px;
      }
      span{
        font-size: 30/2.44px;
      }
      button{
        width: 95%;
        height: 132/2.44px;
        margin: 87/2.44px auto 0;
        border-radius: 132/2.44px;
        border: none;
        background: #4399e5;
        color: #ffffff;
        font-size: 34/2.44px;
      }
    }
    .bottom_tips{
      margin-top: 20/2.44px;
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