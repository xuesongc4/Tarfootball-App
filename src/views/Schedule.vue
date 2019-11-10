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
    import axios from 'axios';

    export default {
        name: 'PageAbout',
        components: {
            ScheduleCard
        },
        data: function () {
            return {
                scheduleID: [],
                scheduleGame: []
            }
        },
        mounted() {
            this.getScheduleID();
        },
        methods: {
            getScheduleID() {
                const getSchedule = localStorage.getItem('scheduleID');
                if (getSchedule) {
                    this.scheduleID = JSON.parse(getSchedule);
                    this.getGames();
                } else {
                    axios
                        .get('https://www.tarfootball.com/wp-json/wp/v2/schedule?&team?slug=varsity')
                        .then(response => {
                            this.scheduleID = response.data.reverse();
                            localStorage.setItem('scheduleID', JSON.stringify(response.data));
                            this.getGames();
                        })
                }
            },
            getGames() {
                this.scheduleID.forEach((data) => {
                    axios
                        .get(`https://www.tarfootball.com//wp-json/gc_rest/v1/metaboxer/${data.id}/schedule-team`)
                        .then(response => {
                            this.scheduleGame.push(response.data);
                        })
                });
            }
        }
    }
</script>
