<template>
    <div class="container">
        <template  v-for="(val,name) in cities" >
            <div class="title" :ref="name">{{name}}</div>
            <div class="city" v-for="item of val" :key="item.id">
                {{item.name}}
            </div>
        </template>
    </div>
</template>
<script>
export default {
    name:'CityList',
    props:{
        cities:Object,
        letter:String
    },
    watch:{
        letter(){
            this.$refs[this.letter][0].scrollIntoView();
        }
    }
}
</script>
<style lang="scss" scoped>
    .title{
        clear: both;
        font-size: vw(24);
        background: #eee;
        height: vw(80);
        padding: vw(25);
    }
    .city{
        float: left;
        width: 25%;
        border-bottom: #eee 1.5px solid;
        border-right: #eee 1.5px solid;
        line-height: vw(90);
        text-align: center;
        @include text-hide;
    }
</style>


