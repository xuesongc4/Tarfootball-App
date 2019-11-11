<template>
  <q-page>
    <header class="flex items-center">
      <img src="../assets/logo_sm.png">
      <div class="title-2">
        Roster
      </div>
    </header>
    <div class="roster">
      <table>
        <tr>
          <th>Player</th>
        </tr>
        <tr v-for="(data, $index) in getRoster" :key="$index">
          <td>
            {{data.title.rendered}}
          </td>
        </tr>
      </table>
    </div>
  </q-page>
</template>
<style>
</style>

<script>
  import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'PageTeam',
  methods:{
    ...mapActions(['fetchDataRoster'])
  },
  mounted() {
    this.fetchDataRoster();
  },
  computed: mapGetters(['getRoster'])
}
</script>
