<template>
    <div class="home">
        <home-header />
        <home-swiper :imgList="imgList" />
        <home-icons :list="iconList" />
        <home-recommend :likeList="likeList" />
        <home-weekend :weekendList="weekendList" />
    </div>
</template>
<script>
import HomeHeader from './homeComponents/HomeHeader'
import HomeSwiper from './homeComponents/HomeSwiper'
import HomeIcons from './homeComponents/HomeIcons'
import HomeRecommend from './homeComponents/HomeRecommend'
import HomeWeekend from './homeComponents/HomeWeekend'
import axios from 'axios'

export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data(){
        return{
            lastCity:'',
            imgList:[],
            iconList:[],
            likeList:[],
            weekendList:[]
        }
    },
    methods:{
        getInfo(){
            axios.get('https://github.com/colorsweb/qunar/tree/gh-pages/dist/mock/index.json')
            .then(this.getInfoSucc)
        },
        getInfoSucc(res){
            res=res.data;
            if(res.ret){
                const data=res.data[this.$store.state.city];
                this.imgList=data.swiperList;
                this.iconList=data.iconList;
                this.likeList=data.recommendList;
                this.weekendList=data.weekendList;
            }
        }
    },
    mounted(){
        this.getInfo()
        this.lastCity=this.$store.state.city
    },
    activated(){
        if(this.lastCity!==this.$store.state.city){
            this.lastCity=this.$store.state.city
            this.getInfo()
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>

