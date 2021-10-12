import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    appendPet:(state,{loai,pet})=>{
      state[loai].push(pet);
    },
    deleteP:(state,{loai,index})=>{
      if(loai==='cat'){
        state.cats.splice(index,1);
      }else{
        state.dogs.splice(index,1);
      }
    }
  },
  actions: {
    addPet:({commit},payload)=>{
      commit('appendPet',payload)
    },
    deletePet:({commit},payload)=>{
      commit('deleteP',payload);
    }
  },
  modules: {
  },
  getters:{
    getCountCat:(state)=>{
      return state.cats.length;
    }
  }
})
