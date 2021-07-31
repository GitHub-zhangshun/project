<template>
  <div class="credit">
    <div class="type_title">请选择投诉反馈类型</div>
    <ul class="li">
      <li class="flex_center_center" :class="active == 1?'active':''" @click="active=1">产品问题</li>
      <li class="flex_center_center" :class="active == 2?'active':''" @click="active=2">贷款机构问题</li>
      <li class="flex_center_center" :class="active == 3?'active':''" @click="active=3">其他问题</li>
    </ul>
    <div class="title">
      <div class="left flex_center_center">
        <span>*</span>
        <p>投诉标题</p>
      </div>
      <input type="text" class="right" v-model="title" placeholder="简要概括投诉反馈的问题 ">
    </div>
    <div class="content_title">
      <span>*</span>
      <p>投诉内容</p>
    </div>
    <van-field
      v-model="content"
      rows="2"
      :autosize=" { maxHeight: 250, minHeight: 250 }"
      label=""
      type="textarea"
      maxlength="1000"
      show-word-limit
      placeholder="请根据实际情况具体说明您的投诉事由，投诉一旦提交，无法删除，对于虚假，恶意投诉，平台保留追究法律责任的权力！"
    />
    <van-button type="primary" @click="submit" round  size="large" color="#fcd43c" >提交</van-button>
  </div>
</template>

<script>
import { Field , Button ,Toast } from 'vant';
export default {
  name: "credit",
  components:{
    [Field.name]:Field,
    [Button.name]:Button,
    [Toast.name]:Toast,
  },
  data() {
    return {
      active:0,
      content:'',
      title:''
    };
  },
  methods: {
    submit(){
      if(this.active == 0){
        Toast('请选择投诉类型反馈')
      }
      if(this.title == ''){
        Toast('请输入投诉标题')
      }
      if(this.content == ''){
        Toast('请输入投诉内容')
      }
      this.$axios({
        method: "post",
        url: "/user/suggest",
        headers: {
          'time': new Date().getTime(),
          'sign': this.$md5(`${new Date().getTime()}jklhjg_`)
        },
        data:{
          uid:JSON.parse(localStorage.getItem('userInfo')).id,
          type:this.active,
          title:this.title,
          content:this.content,
        }
      }).then((res) => {
        if(res.data.status == 200 ){
          Toast('建议提交成功')
        }else{
          Toast(res.data.msg)
        }
      })
    },
  },
};
</script>

<style scoped lang="less">
.credit {
  width: 100%;
  text-align: left;
  height: calc(100vh - 50px);
  overflow-y: scroll;
  background: #fff;
  padding-top: 50/2.44px;
  box-sizing: border-box;
  padding-right: 35/2.44px;
  padding-left: 32/2.44px;
  .type_title{
    color: #000;
    font-size: 48/2.44px;
    margin-bottom: 40/2.44px;
  }
  .li{
    display: flex;
    margin-bottom: 124/2.44px;
    li{
      width: 233/2.44px;
      height: 86/2.44px;
      border-radius:20/2.44px ;
      font-size: 36/2.44px;
      color: #a6a6a6;
      background: #e8e8e8;
      margin-right: 38/2.44px;
    }
    .active{
      background: #fcd43a;
      color: #000;
    }
  }
  .title{
    padding-bottom: 50/2.44px;
    margin-bottom: 45/2.44px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2/2.44px solid #dcdcdc;
    .left{
      font-size:46/2.44px;
      span{
        color: #ae3a33;
        margin-right: 10/2.44px;
      }
    }
    .right{
      font-size: 44/2.44px;
      border: none;
      width: 58%;
    }
  }
  .content_title{
    display: flex;
    font-size:46/2.44px;
    margin-bottom: 40/2.44px;
    span{
      color: #ae3a33;
      margin-right: 10/2.44px;
    }
  }
  /deep/.van-cell{
    background: #f2f9fc;
    padding: 44/2.44px 34/2.44px;
    margin-bottom: 124/2.44px;
    .van-field__body{
      .van-field__control{
        font-size: 38/2.44px;
      }
    }
  }
  .van-button{
    .van-button__content{
      .van-button__text{
        color: #000;
      }
    }
  }
}
</style>
