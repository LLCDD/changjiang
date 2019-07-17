import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    uid: 0,
    name: '',
    avatar: '',
    // 头部内容
    header: "鑫峰视觉",
    headerTab: false,
    footerTab: false,
    // 业主的id
    yezhuid:{}
  },
  mutations: {
    setUser(state, payload) {
      let { uid, username, avatar } = payload
      state.uid = uid
      state.username = username
      state.avatar = avatar

      localStorage.setItem('uid', uid + '')
      localStorage.setItem('username', username)
      localStorage.setItem('avatar', avatar)
    },
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    setAvatar(state, avatar) {
      state.avatar = avatar
      localStorage.setItem('avatar', avatar)
    },
    // 头部内容的修改
    header(a, b) {
      a.header = b
    },
    // 头部的显示和隐藏
    headerTab(a, b) {
      a.headerTab = b
    },
    // 底部的显示和隐藏
    footerTab(a, b) {
      a.footerTab = b
    },
    yezhuid(a , b){
      a.yezhuid = b
    }
  },
  actions: {
    login({ commit }, payload) {
      let { token, id, username, avatar } = payload

      commit('setToken', token)
      commit('setUser', { uid: id, username, avatar })
    }
  }
})
