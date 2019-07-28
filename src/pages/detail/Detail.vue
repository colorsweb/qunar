<template>
    <div>
        <detail-banner />
        <detail-header />
        <div class="test"></div>
    </div>
</template>
<script>
import DetailBanner from './detailComponents/detailBanner'
import DetailHeader from './detailComponents/detailHeader'

export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader
    }
}
</script>
<style lang="scss" scoped>
    .test{
        height: 150vh;
    }
</style>

