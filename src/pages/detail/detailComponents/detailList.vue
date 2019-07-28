<template>
    <div class="container">
        <div class="item" v-for="item of list">
            {{item.title}}
            <detail-list v-if="item.children" 
            :list="item.children"
            class="list"
            >
            </detail-list>
        </div>
    </div>
</template>
<script>


export default {
    name:'DetailList',
    props:{
        list:Array
    }
}
</script>
<style lang="scss" scoped>
    .item{
        border-bottom: 1px solid #eee;
    }
    .list{
        padding-left: 20px;
        
    }
</style>
