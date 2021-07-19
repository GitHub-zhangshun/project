<template>
  <div class="form">
    <ul class="step">
      <li>
        <div>
          <img src="@/assets/images/1.png" alt="">
        </div>
        <span>实名认证</span>
      </li>
      <li>
        <div>
          <img src="@/assets/images/2.png" alt="">
        </div>
        <span>实名认证</span>
      </li>
      <li>
        <div>
          <img src="@/assets/images/3.png" alt="">
        </div>
        <span>实名认证</span>
      </li>
    </ul>
21321
  </div>
</template>

<script>
  export default {
    name:'form'
  }
</script>

<style lang="less" scoped>
.form{
  background: #fff;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 87/2.44px;
  text-align: left;
  .step{
    padding: 0 102/2.44px;
    display: flex;
    justify-content: space-between;
    li{
      display: flex;
      justify-content: center;
      flex-direction: column;
      &>div{
        width: 92/2.44px;
        height: 92/2.44px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #3b95dc;
        border-radius: 100%;
        margin-bottom: 20/2.44px;
        position: relative;
        &::after{
          content: "";
          height: 6/2.44px;
          width: 400%;
          background: #e0e0e0;
          position: absolute;
          right:0;
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
      }
    }
  }
}
</style>