<template>
    <div class="banner">
        <img 
        src="//img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_600x330_93d96bdf.jpg" 
        class="image"
        @click="handleClick"
        >
        <router-link to="/">   
            <div class="top-icon">
                <img src="@/assets/styles/back.svg" type="">
            </div>
        </router-link>
        <div class="img-num">
            <img src="@/assets/styles/image.svg" alt="">27
        </div>
        <div class="desc">北京欢乐谷</div>
        <div class="bottom-opa"></div>
        <scenic-pic 
        v-show="sceneShow"
        @change="changeScene"
        >
            <template #desc>
                景区图片
            </template>
            <template #img>
                <img src="http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_350x240_5291130a.jpg" alt="" class="scene" @click="handleImgClick">
                <img src="http://img1.qunarzz.com/sight/p0/1906/e7/e7276de002459b50a3.img.jpg_350x240_dd696261.jpg" alt="" class="scene" @click="handleImgClick">
                <img src="http://img1.qunarzz.com/sight/p0/1906/e8/e88430aafb498100a3.img.jpg_350x240_cc778652.jpg" alt="" class="scene" @click="handleImgClick">
            </template>
        </scenic-pic>
        <scene-swiper v-show="swiperShow" @change="changeSwiper" />
    </div>
</template>
<script>
import ScenicPic from '../../common/ScenicPic'
import SceneSwiper from '../../common/sceneSwiper'

export default {
    name:'DetailBanner',
    components:{
        ScenicPic,
        SceneSwiper
    },
    data(){
        return{
            sceneShow:false,
            swiperShow:false
        }
    },
    methods:{
        handleClick(){
            this.sceneShow=true
        },
        changeScene(fal){
            this.sceneShow=fal
        },
        handleImgClick(){
            this.swiperShow=true

        },
        changeSwiper(fal){
            this.swiperShow=fal
           
        }
    }
}
</script>
<style lang="scss" scoped>
    .banner{
        color:#fff;
        position: relative;
    }
    .image{
        width: 100%;
    }
    .top-icon{
        position: absolute;
        width: vw(72);
        height: vw(72);
        top:5px;
        left:5px;
        background: rgba(0,0,0,0.5);
        border-radius: 50%;
        img{
            position: absolute;
            width: 26px;
            height: 26px;
            top:calc(50% - 13px);
            left:calc(50% - 13px);
        }
    }
    .img-num{
        position: absolute;
        width: vw(120);
        line-height: vw(60);
        background: rgba(0,0,0,0.5);
        left: vw(40);
        bottom:vw(85);
        border-radius: vw(20);
       
        img{
            position: relative;
            width: vw(30);
            height: vw(40);
            margin-left: vw(10);
            margin-right: vw(10);
            top:vw(7);
        }
    }
    .desc{
        position: absolute;
        left:vw(40);
        bottom:vw(35);
        font-size: vw(36);
    }
    .bottom-opa{
        position: absolute;
        width: 100%;
        height: vw(30);
        bottom: vw(13);
        background-image: linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,0))
    }
    .scene{
        float: left;
        width: vw(330);
        height: vw(230);
        margin:vw(10)
    }
</style>
