<template>
  <div class="index">
    <router-view @changeActive="changeActive"/>
    <ul class="menus flex_around_center">
      <li class="flex_center_center" @click="link('indexContent')">
        <img src="@/assets/images/index_active.png" v-if="active == 'indexContent'" />
        <img src="@/assets/images/index.png" v-else />
        <p>首页</p>
      </li>
      <li class="flex_center_center" @click="link('loan')">
        <img src="@/assets/images/daikuan_active.png" v-if="active == 'loan' || active == '/loan?type=1' || active == '/loan?type=2'" />
        <img src="@/assets/images/daikuan.png" v-else />
        <p>贷款</p>
      </li>
      <li class="flex_center_center" @click="link('credit')">
        <img src="@/assets/images/xinyong_active.png" v-if="active == 'credit'"/>
        <img src="@/assets/images/xinyong.png" v-else />
        <p>投诉建议</p>
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
      active:this.$route.name,
    }
  },
  mounted() {
    this.$axios({
        method: "get",
        url: '/user/isExt',
        params:{uid:JSON.parse(localStorage.getItem('userInfo')).id},
        headers: {
          'time': new Date().getTime(),
          'sign': this.$md5(`${new Date().getTime()}jklhjg_`)
        },
      }).then((res) => {
        localStorage.setItem('ext',JSON.stringify(res.data))
      })
  },
  methods:{
    changeActive(val){
      this.active = val
    },
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
    background: #fff;
    height:50px;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    border-top: 1px solid rgba(0, 0, 0, .1);
    li{
      flex-direction: column;
      img{
        display: inline-block;
        height: 36/1.44px;
        width: 36/1.44px;
        margin-bottom: 9/1.44px;
      }
      p{
        font-size: 18/1.44px;
        color: #000;
      }
    }
  }
}
</style>
