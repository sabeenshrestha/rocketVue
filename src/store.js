import Vue from 'vue'
import Vuex from 'vuex'

import API from '@/lib/API'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rockets:[],
  },

  mutations: {
    setRockets(state, rockets){
        state.rockets = rockets
    },

    addRocket(state, rocket){
        state.rockets.push(rocket)
    },

    removeRocket(state, rocket){
        const index = state.rockets.indexOf(rocket)
        state.rockets.splice(index,1)
    }
  },

  getters:{
    rockets(state){
        return state.rockets
    }
  },

  actions: {
    async getRockets(context){
        const rockets = await API.getRockets()
        context.commit('setRockets', rockets)
    }
  }

})
