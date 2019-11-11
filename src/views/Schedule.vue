<template>
    <q-page>
        <header class="flex items-center">
            <img src="../assets/logo_sm.png">
            <div class="title-2">
                Schedule
            </div>
        </header>
        <div class="schedule">
            <ScheduleCard :key="$index" v-for="(data, $index) in getSchedule" class="mt10 mb10" :data="data"></ScheduleCard>
        </div>
    </q-page>
</template>
<style lang="scss">
</style>

<script>
    import ScheduleCard from '@/components/ScheduleCard.vue';
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'PageAbout',
        components: {
            ScheduleCard
        },
        mounted() {
            this.fetchDataSchedule()
        },
        computed: mapGetters(['getSchedule']),
        methods: {
            ...mapActions(['fetchDataSchedule']),
        }
    }
</script>
