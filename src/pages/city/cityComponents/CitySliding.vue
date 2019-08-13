<template>
    <div class="container" 
    @touchmove="handleTouch"
    >
        <div class="letter" 
        v-for="(val,name) in cities" 
        :key="name"
        ref="letters"
        @click="letterClick"
        >
            {{name}}
        </div>
    </div>
</template>
<script>
export default {
    name:'CitySliding',
    props:{
        cities:Object
    },
    methods:{
        letterClick(e){
            this.$emit('change',e.target.innerText)
        },
        handleTouch(e){
            // console.log(e.touches[0].clientY)
            const topY=e.currentTarget.offsetTop
            let curY=e.touches[0].clientY
            let num=Math.floor((curY-topY)/18)
            let letter2=this.$refs.letters[num].innerText
            this.$emit('changeY',letter2)
        }
    }
}
</script>
<style lang="scss" scoped>
    .container{
        width: vw(35);
        position: fixed;
        top:vw(400);
        right:0;
        display: flex;
        flex-direction: column;
    }
    .letter{
        height: 18px;
        text-align: center;
        color: $mainColor;
    }
</style>


