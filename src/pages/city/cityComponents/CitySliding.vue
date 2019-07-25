<template>
    <div class="container" >
        <div class="letter" 
        v-for="(val,name) in cities" 
        :key="name"
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
        height: vw(35);
        text-align: center;
        color: $mainColor;
    }
</style>


