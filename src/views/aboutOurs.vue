<template>
    <div class="aboutOurs">
        <p class="info">{{info}}</p>
        <div class="logo">
            <img :src="icon" alt="">
        </div>
        <p class="banben">V1.0.0</p>
        <ul>
            <li>
                <div class="left">商务合作</div>
                <div class="right">{{cooperate}}</div>
            </li>
            <li @click="agreement(1)">
                <div class="left">用户协议</div>
                <span class="icon iconfont icon-arrow-right"></span>
            </li>
            <li @click="agreement(2)">
                <div class="left">隐私政策</div>
                <span class="icon iconfont icon-arrow-right"></span>
            </li>
        </ul>
        <p class="bottom">成都慧融科技有限公司</p>
        <p class="bottom1">属ICP备20017813号</p>
    </div>
</template>

<script>
    export default {
        name:'aboutOurs',
        data() {
            return {
                info:'',
                icon:'',
                cooperate:'',
            }
        },
        mounted() {
            this.$axios({
            method: "get",
            url: "/conf/aboutUs",
          }).then((res) => {
            if(res.data.status == 200 ){
                this.info = res.data.data.info
                this.icon = res.data.data.icon
                this.cooperate = res.data.data.cooperate
              console.log(res)
            }else{
              Toast(res.data.msg)
            }
          })
        },
        methods: {
            agreement(val){
                this.$router.push({path:'/agreement',query:{type:val}})
            },
        },  
    }
</script>

<style lang="less" scoped>
.aboutOurs{
    text-align: left;
    background: #fff;
    // overflow-y: scroll;
    // height: 100vh;
    padding-top: 74/2.44px;
    .info{
        padding: 0 34/2.44px;
        font-size: 38/2.44px;
        line-height: 1.5;
        margin-bottom: 129/2.44px;
    }
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 52/2.44px;
        img{
            height: 297/2.44px;
        }
    }
    .banben{
        font-size: 38/2.44px;
        text-align: center;
        padding-bottom: 134/2.44px;
        border-bottom: 2/2.44px solid #ececec;
    }
    ul{
        margin-bottom: 100/2.44px;
        li{
            padding: 56/2.44px 34/2.44px 53/2.44px;
            border-bottom: 2/2.44px solid #ececec;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left{font-size: 44/2.44px;}
        }
    }
    .bottom{
        text-align: center;
        font-size: 30/2.44px;
        margin-bottom: 32/2.44px;
    }
    .bottom1{
        text-align: center;
        font-size: 22/2.44px;
        margin-bottom: 32/2.44px;
    }
}
</style>