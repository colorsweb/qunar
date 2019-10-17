<template>
    <div class="container"  @click="handleClick">
        <swiper :options="swiperOption">
            <swiper-slide data-hash='slide1'>
                <img src="http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_350x240_5291130a.jpg"  class="swiper-img"/>
            </swiper-slide>
            <swiper-slide data-hash='slide2'>
                <img src="http://img1.qunarzz.com/sight/p0/1906/e7/e7276de002459b50a3.img.jpg_350x240_dd696261.jpg"  class="swiper-img"/>
            </swiper-slide>
            <swiper-slide data-hash='slide3'>
                <img src="http://img1.qunarzz.com/sight/p0/1906/e8/e88430aafb498100a3.img.jpg_350x240_cc778652.jpg"  class="swiper-img"/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name:'SceneSwiper',
    data(){
        return{
            swiperOption:{
                loop:true,
                pagination : '.swiper-pagination',
                observer:true,
                observeParents:true,
                paginationType:'fraction',  
            }
        }
    },
    methods:{
        handleClick(){
            this.$emit('change',false)
        }
    }
}
</script>
<style lang="scss" scoped>
    .container ::v-deep .swiper-pagination-fraction{
        bottom:- vw(140);
        color:#fff;
    }
    .container ::v-deep .swiper-container{
        // 默认hidden，改为inherit使下方数字显示
        overflow:inherit;
        //宽度填充视口
        width: 100%;
    }
    .container{
        position: fixed;
        z-index: 10;
        background: #000;
        top:0;
        left:0;
        right:0;
        bottom:0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .swiper-img{
        width: 100%;
    }
</style>
