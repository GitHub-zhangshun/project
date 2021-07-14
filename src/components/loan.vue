<template>
  <div class="loan">
    <div class="loan_title" :style="{backgroundImage:'url(https://img1.baidu.com/it/u=1257639984,1809454588&fm=26&fmt=auto&gp=0.jpg)'}">
      <span :class="flag?'active' : ''" @click="active='1'">急速贷</span>
      <span :class="!flag?'active' : ''" @click="active='2'">大额贷</span>
    </div>
    
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
}
</style>
