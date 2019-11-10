import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import Home from './views/Home.vue'
import Schedule from './views/Schedule.vue'
import Team from './views/Team.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/schedule',
          name: 'schedule',
          component: Schedule
        },
				{
					path: '/team',
					name: 'team',
					component: Team
				}
      ]
    }
  ]
})
