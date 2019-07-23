<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="img of imgList" :key="img.id">
             <img :src="img.src"  class="swiper-img"/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>
<script>

export default {
    name:'HomeSwiper',
    data(){
        return{
            swiperOption:{
                loop:true,
                pagination : '.swiper-pagination',
                paginationClickable :true
            },
            imgList:[
                {id:0,src:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/818f6cc784ae6669b74bbbb255414a53.jpg_750x200_66ca5873.jpg'},
                {id:1,src:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'},
                {id:2,src:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .swiper-pagination ::v-deep .swiper-pagination-bullet-active{
        background:$topFontColor
    }
    .swiper-img{
        width: 100vw;
    }
</style>