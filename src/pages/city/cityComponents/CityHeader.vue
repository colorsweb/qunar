<template>
    <div class="header">
        <div class="header-top">
                <router-link to="/">
                    <img src="@/assets/styles/back.svg" alt="返回">
                </router-link>
            城市选择
        </div>
        <div class="header-bottom">
            <input type="text" 
            placeholder="输入城市名或拼音"
            v-model="value"
            >
        </div>
        <div class="search" v-if="value">
            <div class="search-item" 
            v-for="item of res"
            @click="handleClick(item)"
            >
                {{item}}
            </div>
             <div v-show="show">没有匹配结果</div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'CityHeader',
    props:{
        cities:Object
    },
    data(){
        return{
            value:'',
            res:[],
        }
    },
    computed:{
        show(){
            return !this.res.length;
        }
    },
    methods:{
        handleClick(city){
            this.$store.commit('changeCity',city)
            this.$router.push({path:'/'})
            this.value=''
        }
    },
    watch:{
        value(){
           this.res=[];
            const arr=Object.values(this.cities);
            for(let i=0;i<arr.length;i++){
                for(let j=0;j<arr[i].length;j++){
                    if(arr[i][j].name.includes(this.value)||
                    arr[i][j].spell.includes(this.value)){
                        this.res.push(arr[i][j].name);
                    }
                }
            }
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .header{
        background: $mainColor;
        color: $topFontColor;
        height: vw(140);
    }
    .header-top{
        position: relative;
        height: vw(70);
        line-height: vw(70);
        font-size: vw(32);
        text-align: center;
        img{
            position: absolute;
            width: vw(60);
            height: vw(60);
            text-align: center;
            top:0;
            left:0;
        }
    }
    .header-bottom{
        line-height: vw(70);
        text-align: center;
    }
    input{
        height:vw(50);
        width: 80%;
        text-align: center;
        border-radius: 5px;
    }
    .search{
        position: absolute;
        top:vw(140);
        background: #fff;
        left:0;
        right: 0;
        bottom: 0;
        color:black;
        z-index: 1;
    }
    .search-item{
        border-bottom: 1px solid #eee;
        line-height: vw(50);
    }
   
</style>