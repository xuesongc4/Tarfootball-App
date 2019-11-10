import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QCard,
  QItem,
  QItemSection,
  QItemLabel,
	QFooter,
	QTabs,
	QTab,
	QRouteTab
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QCard,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
		QFooter,
		QTabs,
		QTab,
		QRouteTab
  },
  directives: {
  },
  plugins: {
  }
 })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
