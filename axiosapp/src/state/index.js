import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      num: 10
    },
    mutations:{
      increase:function(state){
        state.num++
      },
      decrease(state){
        state.num--
      }
    },
    actions:{
      increaseAction:function(context){
        context.commit('increase')
      },
      decreaseAction:function(context){
        context.commit('decrease')
      }
    },
    getters:{
      getNum(state){
        return state.num > 0 ? state.num : 0
      }
    }
  })