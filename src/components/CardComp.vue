<template lang="">
    <div>

      <!-- Display cars details here -->
      <template v-if="currentView === 'car'">
      <div class="cars" :style="{ backgroundColor: car.color, color: car.color === 'Black' ? 'white' : 'black'}">
        <slot name="cars"> </slot>
        <p>Model: {{car.model}}</p>
        <p>Year: {{car.year}}</p>
        <p>Color: {{car.color}}</p>
        <p>Price: {{car.price}}</p>
       </div>
       </template>
      
      
      <!-- Display gaming console details here -->
      <template v-else-if="currentView === 'gaming'">
      <div class="games" :style="{backgroundImage: `url(${image})`}">
      <slot name="gaming"> </slot>
      <p>Manufacturer: {{gaming_console.manufacturer}}</p>
      <p>Release year: {{gaming_console.release_year}}</p>
      <p>Price: {{gaming_console.price}}</p>
      <p>Best selling game: {{gaming_console.best_selling_game}}</p>
      </div>
    </template>
    </div>
</template>
<script>
export default {
   props:['car', 'currentView', 'gaming_console'],
   data(){
    return{

      image:"https://www.shutterstock.com/shutterstock/videos/3495669617/thumb/12.jpg?ip=x480"
    }
   }
    
}
</script>
<style scoped>
   .cars{
    border: 1px black solid;
    border-radius: 10%;
    width: 200px;
    height: 200px;
    margin: auto;
   } 
   .games{
    width: 300px;
    border-radius: 10%;
   }
   p{
    color: bisque;
   }
   
</style>