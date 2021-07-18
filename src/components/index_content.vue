<template>
  <div class="indexContent">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img
          src="https://img1.baidu.com/it/u=1257639984,1809454588&fm=26&fmt=auto&gp=0.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img1.baidu.com/it/u=1257639984,1809454588&fm=26&fmt=auto&gp=0.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img1.baidu.com/it/u=1257639984,1809454588&fm=26&fmt=auto&gp=0.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img1.baidu.com/it/u=1257639984,1809454588&fm=26&fmt=auto&gp=0.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img1.baidu.com/it/u=1257639984,1809454588&fm=26&fmt=auto&gp=0.jpg"
          alt=""
        />
      </swiper-slide>
    </swiper>
    <ul class="product flex_between_center">
      <li class="flex_between_center" v-for="(item, index) in 4" :key="index">
        <img src="https://img1.baidu.com/it/u=1257639984,1809454588&fm=26&fmt=auto&gp=0.jpg"/>
        <p>啊啊啊啊</p>
      </li>
    </ul>
    <div class="title">
      <img src="@/assets/images/xinhao1.png" alt="" />
      <p>智能AI推荐</p>
      <img src="@/assets/images/xinhao.png" alt="" />
    </div>
    <ul class="product_list">
      <li class="flex_center_center" v-for="(item, index) in 5" :key="index">
        <img
          src="https://img1.baidu.com/it/u=1257639984,1809454588&fm=26&fmt=auto&gp=0.jpg"/>
        <div class="name_range flex_center_center">
          <p class="name">啊啊啊</p>
          <p class="range">1万~3万</p>
        </div>
        <div class="right flex_center_center">
          <p>消费借贷</p>
          <span class="icon iconfont icon-arrow-right"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Swiper2, { Autoplay } from "swiper";
Swiper2.use([Autoplay]);
import "swiper/swiper-bundle.css";
export default {
  name: "indexContent",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        // // 改变swiper样式时，自动初始化swiper
        // observer: true,
        // // 监测swiper父元素，如果有变化则初始化swiper
        // observeParents: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        loop: true, // 循环模式选项
      },
    };
  },
};
</script>

<style scoped lang="less">
.indexContent {
  height: calc(100vh - 50px);
  overflow-y: scroll;
  .swiper-container {
    width: 100%;
    height: 628/2.88px;
    .swiper-wrapper {
      .swiper-slide {
        img {
          width: 100%;
          height: 628/2.88px;
        }
      }
    }
  }
  .product {
    z-index: 1;
    background-color: #ffffff;
    position: relative;
    top: -30/2.88px;
    border-radius: 40/2.88px 40/2.88px 0 0;
    padding: 47/2.88px 62/2.88px 53/2.88px;
    overflow: hidden;
    li {
      flex-direction: column;
      img {
        border-radius: 20px;
        overflow: hidden;
        margin-bottom: 28/2.88px;
        width: 152/2.88px;
        height: 152/2.88px;
      }
      p {
        font-size: 37/2.88px;
      }
    }
  }
  .title{
    margin-top: -15/2.88px;
    background-color: #ffffff;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 64/2.88px;
    padding-top: 58/2.88px;
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
            font-size: 45/2.88px;
            margin-bottom: 17/2.88px;;
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
