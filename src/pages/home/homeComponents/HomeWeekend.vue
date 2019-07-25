<template>
    <div class="container">
        <div class="title">周末去哪儿</div>
        <template v-for="item of weekendList">
            <div class="image">
                <img :src=item.imgUrl>
            </div>
            <div class="description">
                <div class="des-top">{{item.title}}</div>
                <div class="des-bottom">{{item.desc}}</div>
            </div>
        </template>
    </div>
</template>
<script>
export default {
    name:'HomeWeekend',
    props:{
        weekendList:Array
    }
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


