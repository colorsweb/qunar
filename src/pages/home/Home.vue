<template>
    <div class="home">
        <home-header />
        <home-swiper />
        <home-icons />
        <home-recommend />
        <home-weekend />
    </div>
</template>
<script>
import HomeHeader from './homeComponents/HomeHeader'
import HomeSwiper from './homeComponents/HomeSwiper'
import HomeIcons from './homeComponents/HomeIcons'
import HomeRecommend from './homeComponents/HomeRecommend'
import HomeWeekend from './homeComponents/HomeWeekend'

export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    }
}
</script>
<style lang="scss" scoped>
    
</style>

