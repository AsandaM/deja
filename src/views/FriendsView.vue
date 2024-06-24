<template>
  <div>
    <!-- Check if there are friends -->
    <template v-if="friendsData && friendsData.length">
      <!-- Iterate through the list of friends -->
      <div v-for="friend in friendsData" :key="friend.id" :style="{ borderColor: friend.gender === 'Male' ? 'gold' : 'green', borderWidth: '2px', borderStyle: 'solid', padding: '10px', margin: '10px' }">
        <h3>{{ friend.firstName }}</h3>
        <p>Contact: {{ friend.contactDetails }}</p>
      </div>
    </template>
    <template v-else>
      <!-- Display spinner if there are no friends -->
      <div class="spinner">Loading...</div>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    friendsData() {
      return this.$store.state.friends;
    }
  },
  mounted() {
    this.$store.dispatch('getData');
  }
}
</script>

<style scoped>
.spinner {
  /* Style your spinner */
}
</style>