<template>
    <div>
        <detail-banner />
        <detail-header />
        <detail-list :list="list" />
        <div class="test"></div>
    </div>
</template>
<script>
import DetailBanner from './detailComponents/detailBanner'
import DetailHeader from './detailComponents/detailHeader'
import DetailList from './detailComponents/detailList'
import axios from 'axios'

export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        this.getInfo()
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
</style>

