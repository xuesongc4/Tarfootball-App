<template>
    <q-page>
        <header class="flex items-center">
            <img src="../assets/logo_sm.png">
            <div class="title-2">
                Roster
            </div>
        </header>
        <div class="roster">
            <table class="roster-table">
                <tr>
                    <th>no.</th>
                    <th>player</th>
                    <th>position</th>
                    <th>ht.</th>
                    <th>wt.</th>
                    <th>year</th>
                </tr>
                <tr v-for="(data, $index) in getRoster" :key="$index">
                    <td>
                        {{data.gc_metaboxer_data.no}}
                    </td>
                    <td>
                        <a :href="data.link" target="_blank">{{data.title.rendered}}</a>
                    </td>
                    <td>
                        {{data.gc_metaboxer_data.pos}}
                    </td>
                    <td>
                        {{data.gc_metaboxer_data.ht}}
                    </td>
                    <td>
                        {{data.gc_metaboxer_data.wt}}
                    </td>
                    <td>
                        {{data.gc_metaboxer_data.year}}
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
        methods: {
            ...mapActions(['fetchDataRoster'])
        },
        mounted() {
            this.fetchDataRoster();
        },
        computed: {
            ...mapGetters(['getRoster'])
        }
    }
</script>
