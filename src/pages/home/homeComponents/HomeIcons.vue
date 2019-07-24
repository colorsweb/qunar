<template>
    <div class="container">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(iconList,index) of pages" :key="index" >
                <div class="category" v-for="icon of iconList" :key=icon.id>
                    <div class="iconArea">
                        <img :src="icon.src" alt="">
                    </div>
                    <div class="icon-demo" v-text="icon.demo"></div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name:'HomeIcons',
    data(){
        return{
            swiperOption:{
                 pagination : '.swiper-pagination',
                 paginationClickable :true,
            },
            iconList:[
                {id:0,src:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',demo:'景点门票'},
                {id:1,src:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/cfaa6a0a18a3bebb379fbc959c0567fb.png',demo:'游嗨呀诺达'},
                {id:2,src:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',demo:'三亚必游'},
                {id:3,src:'http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png',demo:'海滨海岛'},
                {id:4,src:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/437aad2dd0c1edb38fee0c51f8f9dd02.png',demo:'精彩演出'},
                {id:5,src:'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',demo:'亲子乐园'},
                {id:6,src:'http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png',demo:'分界洲特价'},
                {id:7,src:'http://img1.qunarzz.com/piao/fusion/1803/b6/aae239efe3496602.png',demo:'海鲜美食'},
                {id:8,src:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3a0879f224e0aca97843bff78cabac3a.png',demo:'海上观光'},
                {id:9,src:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3a0879f224e0aca97843bff78cabac3a.png',demo:'游艇出海'}
            ]
        }
    },
    computed:{
        pages(){
            const pages=[];
            this.iconList.forEach((item,index) => {
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


