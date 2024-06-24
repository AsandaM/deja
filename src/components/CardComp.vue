<template lang="">
    <div>

      <!-- Display cars details here -->
      <template v-if="currentView === 'car'">
      <div :style="{ backgroundColor: car.color, color: textColor, borderColor: borderColor, borderWidth: '1px', borderStyle: 'solid', borderRadius:'10%' }">
       <slot name="cars"> </slot>
       <p>Model: {{car.model}}</p>
       <p>Year: {{car.year}}</p>
       <p>Color: {{car.color}}</p>
       <p>Price: {{car.price}}</p>
       </div>
       </template>
      
      
      <!-- Display gaming console details here -->
      <template v-else-if="currentView === 'gaming'">
      <slot name="gaming"> </slot>
      <p>Manufacturer: {{gaming_console.manufacturer}}</p>
      <p>Release year: {{gaming_console.release_year}}</p>
      <p>Price: {{gaming_console.price}}</p>
      <p>Best selling game: {{gaming_console.best_selling_game}}</p>
    </template>
    </div>
</template>
<script>
export default {
   props:['car', 'currentView', 'gaming_console'],
   computed: {
     textColor() {
    // Check if the current view is 'car' and if the car object exists and has a color attribute
    if (this.currentView === 'car' && this.car.color === 'black') {
      return 'white'; 
    }
    return 'brown'; // Default text color
  },
  borderColor() {
      if (this.currentView === 'car' && this.car.color === 'black') {
        return 'white'
      }
      return 'black'; 
    }
   }
    
}
</script>
<style lang="">
    
</style>