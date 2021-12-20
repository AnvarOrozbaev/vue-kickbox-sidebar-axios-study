import { createStore } from 'vuex'
import axios from "axios"
import actions from './actions/actions'
import mutations from "./mutations"
import getters from "./getters";

export default createStore({
  state: {
    cards:{},
    pokemon:{},
    isValid: false
  },
  mutations,
  actions,
  getters
  
  
})
