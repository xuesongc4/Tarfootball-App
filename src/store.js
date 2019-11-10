import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    schedule: []
  },
  mutations: {
    setDataPosts: (state, fetchData) => (state.posts = fetchData),
    setDataSchedule: (state, fetchData) => (state.schedule = fetchData)
  },
  actions: {
    async fetchDataPosts({commit}){
      const response = await axios
          .get('https://www.tarfootball.com/wp-json/wp/v2/posts?per_page=5&_embed');
      commit('setDataPosts',response);
    },
    async fetchDataSchedule({commit}){
      const response = await axios
          .get('https://www.tarfootball.com/wp-json/wp/v2/schedule?per_page=100');
      commit('setDataSchedule',response);
    },
  },
  getters:{
    getPosts: (state) => state.posts,
    getSchedule: (state) => state.schedule
  }
})
