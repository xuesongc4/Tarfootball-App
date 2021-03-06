import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    posts: [],
    scheduleId: [],
    roster:[],
    loadState: false
  },
  mutations: {
    setLoadState: (state, fetchState) => (state.loadState = fetchState),
    setDataPosts: (state, fetchData) => (state.posts = fetchData),
    setDataSchedule: (state, fetchData) => (state.scheduleId = fetchData),
    setDataRoster: (state, fetchData) => (state.roster = fetchData)
  },
  actions: {
    async fetchDataPosts({commit}){
      commit('setLoadState',false);
      const response = await axios
          .get('https://www.tarfootball.com/wp-json/wp/v2/posts?per_page=5&_embed');
      commit('setDataPosts',response);
      commit('setLoadState',true);
    },
    async fetchDataSchedule({commit}){
      commit('setLoadState',false);
      let filteredResponse = [];
      const response = await axios
          .get('https://www.tarfootball.com/wp-json/wp/v2/schedule?per_page=100');
      response.data.forEach((schedule)=>{
        if(schedule.team[0] === 16){
          schedule.gc_metaboxer_data.link = schedule.link;
          filteredResponse.push(schedule.gc_metaboxer_data)
        }
      })
      commit('setDataSchedule',filteredResponse);
      commit('setLoadState',true);
    },
    async fetchDataRoster({commit}){
      commit('setLoadState',false);
      let filteredResponse = [];
      let sortedResponse = [];
      const response = await axios
          .get('https://www.tarfootball.com/wp-json/wp/v2/roster?per_page=100');
      response.data.forEach((roster)=>{
        if(roster.team[0] === 16){
          filteredResponse.push(roster)
        }
      });
      sortedResponse = filteredResponse.sort((a,b) => (Number(a.gc_metaboxer_data.no) > Number(b.gc_metaboxer_data.no))? 1: -1);
      commit('setDataRoster',sortedResponse);
      commit('setLoadState',true);
    },
  },
  getters:{
    getLoadState: (state)=> state.loadState,
    getPosts: (state) => state.posts,
    getSchedule: (state) => state.scheduleId,
    getRoster: (state) => state.roster
  }
})
