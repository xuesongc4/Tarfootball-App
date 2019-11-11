import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    scheduleId: [],
    roster:[]
  },
  mutations: {
    setDataPosts: (state, fetchData) => (state.posts = fetchData),
    setDataSchedule: (state, fetchData) => (state.scheduleId = fetchData),
    setDataRoster: (state, fetchData) => (state.roster = fetchData)
  },
  actions: {
    async fetchDataPosts({commit}){
      const response = await axios
          .get('https://www.tarfootball.com/wp-json/wp/v2/posts?per_page=5&_embed');
      commit('setDataPosts',response);
    },
    async fetchDataSchedule({commit}){
      let filteredResponse = [];
      const response = await axios
          .get('https://www.tarfootball.com/wp-json/wp/v2/schedule?per_page=100');
      response.data.forEach((schedule)=>{
        if(schedule.team[0] === 15){
          filteredResponse.push(schedule.id)
        }
      })
      commit('setDataSchedule',filteredResponse);
    },
    async fetchDataRoster({commit}){
      let filteredResponse = [];
      const response = await axios
          .get('https://www.tarfootball.com/wp-json/wp/v2/roster?per_page=100');
      response.data.forEach((roster)=>{
        if(roster.team[0] === 16){
          filteredResponse.push(roster)
        }
      })
      commit('setDataRoster',filteredResponse);
    },
  },
  getters:{
    getPosts: (state) => state.posts,
    getSchedule: (state) => state.scheduleId,
    getRoster: (state) => state.roster
  }
})
