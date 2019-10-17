<template>
    <div class="header" 
    ref="header" 
    v-show="show"
    >
        <router-link to="/">
            <img src="@/assets/styles/back.svg" alt="">
        </router-link>
        北京欢乐谷
    </div>
</template>
<script>
export default {
    name:'DetailHeader',
    data(){
        return{
            show:false
        }
    },
    activated(){
        document.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
        document.removeEventListener('scroll',this.handleScroll)
    },
    methods:{
        handleScroll(){
            //判断当前文档是混杂模式还是标准模式        
            let scrTop=document.compatMode==='CSS1Compat'?
            document.documentElement.scrollTop:document.body.scrollTop
            if(scrTop>50){
                this.show=true
                this.$refs.header.style.opacity=(scrTop-50)/200
            }  
            else{
                this.show=false
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .header{
        z-index: 1;
        position: fixed;
        top:0;
        left:0;
        right:0;
        line-height: vw(90);
        background: #00BCD4;
        text-align: center;
        color: $topFontColor;
        img{
            position: absolute;
            width: vw(50);
            height: vw(50);
            top:vw(20);
            left: vw(20);
        }
    }
</style>
