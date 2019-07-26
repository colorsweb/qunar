<template>
    <div class="container" ref="wrapper">
        <div>
            <template  v-for="(val,name) in cities" >
                <div class="title" :ref="name" >
                    {{name}}
                </div>
                <div class="city" 
                v-for="item of val" 
                :key="item.id"
                @click="handleClick(item.name)"
                >
                    {{item.name}}
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
    name:'CityList',
    props:{
        cities:Object,
        letter:String
    },
    methods:{
        handleClick(city){
            this.$store.commit('changeCity',city)
            this.$router.push({path:'/'})
        }
    },
    watch:{
        letter(){
            this.scroll.scrollToElement(this.$refs[this.letter][0],300)
        }
    },
    mounted(){
        //  this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.wrapper,{
              click:true
          })
        // });
    }
}
</script>
<style lang="scss" scoped>
    .container{
        clear: both;
        height: 80vh;
        overflow: hidden;
        // position: absolute;
        // top:vw(400);
        // left:0;
        // right: 0;
        // bottom: 0;
    //    两种使用better-scroll的父元素定为方法
    }
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


