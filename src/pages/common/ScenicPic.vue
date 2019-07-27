<template>
    <div class="container" >
        <div class="header">
            <img src="@/assets/styles/back.svg" @click="handleClick">
            <slot name="desc"></slot>
        </div>
        <div class="pic">
            <slot name="img"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'ScenicPic',
    methods:{
        handleClick(){
            this.$emit('change',false)
        }
    }
}
</script>
<style lang="scss" scoped>
    .container{
        background: #fff;
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index: 5;
    }
    .header{
        line-height: vw(90);
        background: #ccc;
        text-align: center;
        img{
            position: absolute;
            width: vw(40);
            height: vw(40);
            top:vw(10);
            left:vw(10);
        }
    }
    .pic{
        padding:vw(20);
    }
</style>
