<template lang="">
    <div>
       <slot name="cars"> 
       </slot>
       <p>Model: {{car.model}}</p>
       <p>Year: {{car.year}}</p>
       <p>Price: {{car.price}}</p>

       <slot name="gaming"></slot>
    </div>
</template>
<script>
export default {
   props:['car']
    
}
</script>
<style lang="">
    
</style>