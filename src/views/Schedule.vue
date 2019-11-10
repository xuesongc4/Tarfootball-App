<template>
    <q-page>
        <header class="flex items-center">
            <img src="../assets/logo_sm.png">
            <div class="title-2">
                Schedule
            </div>
        </header>
        <div class="schedule q-pa-sm">
            <ScheduleCard :key="$index" v-for="(data, $index) in scheduleGame" class="mt10 mb10" :data="data"></ScheduleCard>
        </div>
    </q-page>
</template>
<style lang="scss">
</style>

<script>
    import ScheduleCard from '@/components/ScheduleCard.vue';
    import {mapGetters, mapActions} from 'vuex';
    import axios from 'axios';

    export default {
        name: 'PageAbout',
        components: {
            ScheduleCard
        },
        data: function () {
            return {
                scheduleGame: []
            }
        },
        mounted() {
            this.fetchDataSchedule()
        },
        computed: mapGetters(['getSchedule']),
        methods: {
            ...mapActions(['fetchDataSchedule']),
        },
        watch:{
            getSchedule: function() {
                this.getSchedule.forEach((data) => {
                    axios
                        .get(`https://www.tarfootball.com/wp-json/gc_rest/v1/metaboxer/${data}/schedule-team`)
                        .then(response => {
                            this.scheduleGame.push(response.data);
                        })
                });
            }
        }
    }
</script>
