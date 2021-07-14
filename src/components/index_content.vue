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
  height: calc(100vh - 100px);
  overflow-y: scroll;
  .swiper-container {
    width: 100%;
    height: 400px;
    .swiper-wrapper {
      .swiper-slide {
        img {
          width: 100%;
          height: 400px;
        }
      }
    }
  }
  .product {
    z-index: 1;
    background-color: #ffffff;
    position: relative;
    top: -30px;
    border-radius: 40px 40px 0 0;
    padding: 40px 40px;
    overflow: hidden;
    li {
      flex-direction: column;
      img {
        border-radius: 30px;
        overflow: hidden;
        margin-bottom: 10px;
        width: 80px;
        height: 80px;
      }
      p {
        font-size: 26px;
      }
    }
  }
  .title{
    margin-top: -15px;
    background-color: #ffffff;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 30px;
    padding-top: 30px;
    img{
      width: 20px;
      height: 20px;
    }
    p{
      font-size: 26px;
      padding: 0 10px;
    }
  }
  .product_list{
      padding: 25px;
      background-color: #ffffff;
      li{
        padding:  10px 20px;
        box-shadow: 0px 2px 15px 0px rgba(35,24,21,0.1);
        border-radius: 16px;
        margin-bottom: 30px;
        img{
          width: 80px;
          height: 80px;
          border-radius: 20px;
        }
        .name_range{
          flex: 1;
          margin-left: 20px;
          flex-direction: column;
          align-items: flex-start;
          .name{
            font-size: 28px;
            margin-bottom: 10px;;
          }
          .range{
            color: #E91018;
            font-size: 26px;
          }
        }
        .right{
          p{
            margin-right: 20px;
            font-size: 24px;
            color: #999999;
          }
        }
      }
    }
}
</style>
