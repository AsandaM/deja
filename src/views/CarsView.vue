<template>
    <div class="hehe">
        <section v-for="car in carsData()" :key="car.name">
        <card-comp :car="car">
                <template #cars>
                    <h2>{{car.make}}</h2>
                </template>            
            </card-comp>
        </section>
    </div>
</template>
<script>
import CardComp from '../components/CardComp.vue'
export default {
    methods:{
        carsData(){
            return this.$store.state.cars
        }
    },
    computed:{
        getData(){
            return this.$store.dispatch('getData')
        }
    },
    mounted(){
        this.getData
    },
    components:{
        CardComp
    }
}
</script>
<style scoped>
.hehe{
    display: grid;
    grid-template-columns: repeat(5,1fr);
}
section{
    border: 3px black solid;
    border-radius: 10%;
    width: 200px;
    height: 200px;
    margin: auto;
}
    
</style>