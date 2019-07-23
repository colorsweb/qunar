<template>
    <div>
        <home-header />
        <home-swiper />
    </div>
</template>
<script>
import HomeHeader from './homeComponents/HomeHeader'
import HomeSwiper from './homeComponents/HomeSwiper'

export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper
    }
}
</script>
<style lang="scss" scoped>

</style>

