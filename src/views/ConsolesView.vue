<template>
    <div class="hehe">
        <section v-for="gaming_console in consolesData()" :key="gaming_console.name">
        <card-comp :gaming_console="gaming_console" currentView="gaming">
                <template #gaming>
                    <h2>{{gaming_console.name}}</h2>
                </template>            
            </card-comp>
        </section>
    </div>
</template>
<script>
import CardComp from '../components/CardComp.vue'
export default {
    methods:{
        consolesData(){
            return this.$store.state.gaming_consoles
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
    gap: 2px;
}
section{
    border: 3px black solid;
    border-radius: 10%;
    width: 300px;
    height: 210px;
    margin: auto;
}   
</style>