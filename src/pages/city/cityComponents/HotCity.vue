<template>
    <div class="container">
            <div class="title">热门城市</div>
            <ul class="city-link">
                <li class="city" 
                v-for="item of hotCities" 
                :key="item.id"
                @click="handleClick(item.name)"
                >
                    {{item.name}}
                </li>
            </ul>
    </div>
</template>
<script>
export default {
    name:'HotCity',
    props:{
        hotCities:Array,
    },
    methods:{
        handleClick(city){
            this.$store.commit('changeCity',city)
            this.$router.push({path:'/'})
        }
    }
}
</script>
<style lang="scss" scoped>
    .title{
        font-size: vw(24);
        background: #eee;
        height: vw(80);
        padding: vw(25);
    }
    .city{
        float: left;
        width: vw(250);
        border-bottom:#eee 1.5px solid;
        border-right:#eee 1.5px solid;
        height: vw(90);
        line-height: vw(90);
        text-align: center;
    }
</style>

