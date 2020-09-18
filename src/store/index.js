import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//import dogs from '@/assets/dogs.json';

export default new Vuex.Store({
  state: {
    dogs: []
  },
  mutations: {
    updateData(state, data) {
      state.dogs = data;
    }
  },
  actions: {
    async fetchData(ctx) {
      const url = 'https://api.jsonbin.io/b/5f4d604b514ec5112d136cd6';
      let resp = await fetch(url)
      let data = await resp.json()
      ctx.commit('updateData', data)
    }
  },
  getters: {
    dog(state) {
      return (chipNr) => {
        return state.dogs.filter(dog => dog.chipNumber === chipNr)[0]
      }
    },
    dogCount(state) {
      return state.dogs.length
    }
  }
})
