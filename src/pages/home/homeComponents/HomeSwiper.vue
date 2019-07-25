<template>
    <swiper :options="swiperOption"  v-if="showSwiper">
        <swiper-slide v-for="img of imgList" :key="img.id">
             <img :src="img.imgUrl"  class="swiper-img"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>
<script>

export default {
    name:'HomeSwiper',
    props:{
        imgList:Array
    },
    data(){
        return{
            swiperOption:{
                loop:true,
                // loop使最后的图和第一张衔接
                pagination : '.swiper-pagination',
                autoplay:3000,
                autoplayDisableOnInteraction:false
            }
        }
    },
    computed:{
        showSwiper(){
            return this.imgList.length;
        }
    }
}
</script>
<style lang="scss" scoped>
    .swiper-pagination ::v-deep .swiper-pagination-bullet-active{
        background:$topFontColor;
    }
    .swiper-img{
        width: 100vw;
    }
</style>