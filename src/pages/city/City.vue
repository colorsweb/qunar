<template>
    <div class="city">
        <city-header :cities="cities"/>
        <hot-city 
        :hotCities="hotCities"
        />
        <city-list 
        :cities="cities" 
        :letter="letter"
        />
        <city-sliding 
        :cities="cities"
        @change="handleLetter"
        />
    </div>
</template>
<script>
import CityHeader from './cityComponents/CityHeader'
import HotCity from './cityComponents/HotCity'
import CityList from './cityComponents/CityList'
import CitySliding from './cityComponents/CitySliding'
import axios from 'axios'

export default {
    name:'City',
    components:{
        CityHeader,
        HotCity,
        CityList,
        CitySliding
    },
    data(){
        return{
            hotCities:[],
            cities:{},
            letter:'',
        }
    },
    methods:{
        getInfo(){
            axios.get('/api/city.json')
            .then(this.getInfoSucc);
        },
        getInfoSucc(res){
            res=res.data;
            if(res.ret){
                const data=res.data;
                this.hotCities=data.hotCities;
                this.cities=data.cities;
            }
        },
        handleLetter(lett){
            this.letter=lett;
        }
    },
    mounted(){
        this.getInfo();
    }
}
</script>
<style lang="scss" scoped>

</style>
