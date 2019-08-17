<template>
    <div>
        <detail-banner />
        <detail-header />
        <detail-list :list="list" />
        <router-link :to="`/detail/${$route.params.id}/eva`">
            <div class="info">评价</div>
        </router-link>
        <router-link :to="`/detail/${$route.params.id}/intro`">
            <div class="info">简介</div>
        </router-link>
        <fade>
            <router-view></router-view>
        </fade>
        <div class="test"></div>
    </div>
</template>
<script>
import Fade from '../common/fade'
import DetailBanner from './detailComponents/detailBanner'
import DetailHeader from './detailComponents/detailHeader'
import DetailList from './detailComponents/detailList'
import axios from 'axios'

export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList,
        Fade
    },
    data(){
        return{
            list:[]
        }
    },
    activated(){
        this.getInfo()
    },
    beforeRouteUpdate(to,from,next){
        console.log(to.path)
        next()
    },
    beforeRouteLeave (to, from , next) {
        const answer = window.confirm('确定离开此页吗？')
         if (answer) {
             next()
        } else {
        next(false)
        }
    },
    methods:{
        getInfo(){
            axios.get('/api/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            })
            .then(this.getInfoSucc)
        },
        getInfoSucc(res){
            res=res.data
            if(res.ret){
                const data=res.data.categoryList
                this.list=data
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .test{
        height: 150vh;
    }
    .info{
        float: left;
        width: 50%;
        line-height: vw(80);
        text-align: center;
        background: rgb(120, 230, 184);
        border-right: 2px dotted red;
    }
</style>

