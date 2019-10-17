<template>
    <div class="container">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(iconList,index) of pages" :key="index" >
                <div class="category" v-for="icon of iconList" :key=icon.id>
                    <div class="iconArea">
                        <img :src=icon.imgUrl alt="">
                    </div>
                    <div class="icon-demo" v-text="icon.desc"></div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name:'HomeIcons',
    props:{
        list:Array
    },
    data(){
        return{
            swiperOption:{
                 pagination : '.swiper-pagination',
                 //导航标志能否点击
                 paginationClickable :true,
            }  
        }
    },
    computed:{
        pages(){
            const pages=[];
            this.list.forEach((item,index) => {
                const page=Math.floor(index/8);
                if(!pages[page]){
                    pages[page]=[];
                }
                pages[page].push(item);
            });
            return pages;
        }
    }
}
</script>
<style lang="scss" scoped>
// 当数量少于8个时使swiper的高度和8个时一致
    .container ::v-deep .swiper-container{
        height: vw(375);
    }
    .container ::v-deep .swiper-pagination-bullets{
        bottom: 0;
    }
    .container{
        background: #fff;   
        height: vw(375);
        .category{
            box-sizing: border-box;
            float: left;
            width: 25%;
            height: 45%;
            padding-top: vw(20);
            .iconArea{
                text-align: center;
                height: vw(100);
                img{
                width: vw(110);
                height: vw(110);
                }
            }
            .icon-demo{
               text-align: center;
               margin-top: vw(10);
               @include text-hide;
            }
        }
    }
</style>


