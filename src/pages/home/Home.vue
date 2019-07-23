<template>
    <div>
        <home-header />
        <home-swiper />
        <home-icons />
    </div>
</template>
<script>
import HomeHeader from './homeComponents/HomeHeader'
import HomeSwiper from './homeComponents/HomeSwiper'
import HomeIcons from './homeComponents/HomeIcons'

export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }
}
</script>
<style lang="scss" scoped>

</style>

