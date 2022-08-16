<template>
  <div class="swiper-container" id="floor1Swiper">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="(carousel, index) in list"
                    :key="carousel.id"
                  >
                    <img :src="carousel.imgUrl" />
                  </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
</template>

<script>
import Swiper from "swiper"
export default {
    name:"Carousel",
    props:["list"],
     watch: {
    list: {
      // 立即监听: 不管数据变化不,立即上来监听一次
      deep: true,
      immediate: true,
      handler() {
        // 只能检测到数据有了,但是v-for动态渲染结构,还是没办法确实,还是要用到nextTick
        this.$nextTick(() => {
          var mySwiper = new Swiper(".swiper-container", {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
}
</script>

<style>

</style>