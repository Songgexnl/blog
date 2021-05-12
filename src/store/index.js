import Vue from 'vue'
import Vuex from 'vuex'
// import { setCookie , getCookie,removeCookie } from '../cookie/cookies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: JSON.parse(sessionStorage.getItem("userInfo"))
    // userInfo: getCookie('userInfo')
  },
  mutations: {
    // set
    SET_TOKEN: (state, token) => {
      state.token = token
      localStorage.setItem("token", token)
    },

    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
    },
    
    // SET_USERINFO: (state, userInfo) => {
    //   state.userInfo = userInfo
    //   setCookie('userInfo',JSON.stringify(userInfo),30)

    // },


    //
    REMOVE_INFO: (state) => {
      state.token = ''

      state.userInfo = {}

      localStorage.setItem("token", '')
      sessionStorage.setItem("userInfo", JSON.stringify(''))
      // cookie.removeCookie('userInfo')

      // removeCookie('userInfo')
    }

  },
  getters: {
    getUser: state => {
      return state.userInfo

    }

  },
  actions: {
  },
  modules: {
  }
})
