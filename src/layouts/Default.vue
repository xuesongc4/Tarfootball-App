<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer class="bg-white text-primary">
      <q-tabs no-caps active-color="info" indicator-color="info" class="text-white" v-model="tab">
        <q-route-tab
          icon="home"
          label="Home"
          to="/"
          exact
        />
        <q-route-tab
          icon="calendar_today"
          label="Schedule"
          to="/schedule"
          exact
        />
        <q-route-tab
          icon="group"
          label="Team"
          to="/team"
          exact
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
      <div class="subscribe">
        <img class="mb10" src="../assets/USA_Flag.jpg" alt="USA Flag">
        <div class="title-2">
          Join the Newport Football Email List
        </div>
        <a target="_blank" href="https://www.tarfootball.com/subscribe/" class="button white">Subscribe</a>
      </div>
      <div class="copy-right">
        Newport Harbor Football Boosters is a 501(c)(3) non-profit.
        A registered California corporation. Federal Tax ID # 33-0010005
        Copyright © {{new Date().getFullYear()}}. Newport Harbor High School Football.
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',

  data () {
    return {
    	tab: 'home',
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>
