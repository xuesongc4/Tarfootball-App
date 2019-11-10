import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    setData: (state, fetchData) => (state.posts = fetchData)
  },
  actions: {
    async fetchData({commit}){
      const response = await axios
          .get('https://www.tarfootball.com/wp-json/wp/v2/posts?per_page=5&_embed');
      commit('setData',response);
    }
  },
  getters:{
    getPosts: (state) => state.posts
  }
})
