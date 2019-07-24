<template>
    <div class="container">
        <div class="title">周末去哪儿</div>
        <div class="image">
            <img src="http://img1.qunarzz.com/sight/source/1812/e1/28d418ecf6e535.jpg_r_640x214_77e18cdc.jpg" alt="">
        </div>
        <div class="description">
            <div class="des-top">情侣约会圣地</div>
            <div class="des-bottom">你听，鸟语！你闻，花香！你听，海浪。你看，我的对面，是你……</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeWeekend'
}
</script>
<style lang="scss" scoped>
    .container{
        clear: both;
    }
    .title{
        line-height: vw(80);
        padding-left:vw(30);
        background: #eee;
    }
    .image>img{
        width:100%;
        height: vw(284);
    }
    .description{
        height: vw(130);
        padding:vw(20);
    }
    .des-bottom{
        @include text-hide;
        font-size: vw(24);
    }
</style>


