import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    cars:null,
    gaming_consoles:null,
    friends:null
  },
  getters: {
  },
  mutations: {
    setCars(state, payload){
      state.cars = payload
    },
    setGamingConsoles(state, payload){
      state.gaming_consoles = payload
    },
    setFriends(state, payload){
      state.friends = payload
    }
  },
  actions: {
    async getData({commit}){
      // let fetchedInfo = await fetch('https://asandam.github.io/dejavue/data/')
      // let data = await fetchedInfo.json()
      let {data} = await axios.get('https://asandam.github.io/dejavue/data/')
      let {cars, gaming_consoles, friends} = data
      commit('setCars', cars)
      commit('setGamingConsoles', gaming_consoles)
      commit('setFriends', friends)

    }
  },
  modules: {
  }
})
