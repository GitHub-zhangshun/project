<template>
  <div class="index">
    <router-view />
    <ul class="menus flex_around_center">
      <li class="flex_center_center" @click="link('indexContent')">
        <img src="@/assets/images/index_active.png" v-if="active == 'indexContent'" />
        <img src="@/assets/images/index.png" v-else />
        <p>首页</p>
      </li>
      <li class="flex_center_center" @click="link('loan')">
        <img src="@/assets/images/daikuan_active.png" v-if="active == 'loan'" />
        <img src="@/assets/images/daikuan.png" v-else />
        <p>贷款</p>
      </li>
      <li class="flex_center_center" @click="link('credit')">
        <img src="@/assets/images/xinyong_active.png" v-if="active == 'credit'"/>
        <img src="@/assets/images/xinyong.png" v-else />
        <p>信用报告</p>
      </li>
      <li class="flex_center_center" @click="link('my')">
        <img src="@/assets/images/wode_active.png" alt="" v-if="active == 'my'" />
        <img src="@/assets/images/wode.png" alt="" v-else />
        <p>我的</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "index",
  data() {
    return {
      active:this.$route.name
    }
  },
  methods:{
    link(active){
      this.active = active
      this.$router.push(active)
    }
  }
};
</script>
<style lang="less">
.index{
  height: 100vh;
  .menus{
    height: 100px;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    border-top: 1px solid rgba(0, 0, 0, .1);
    li{
      flex-direction: column;
      img{
        display: inline-block;
        height: 50px;
        width: 50px;
        margin-bottom: 16px;
      }
      p{
        font-size: 20px;
        color: #000;
      }
    }
  }
}
</style>
