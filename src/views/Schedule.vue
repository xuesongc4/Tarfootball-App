<template>
    <q-page :class="[getLoaderState ? 'preloader' : null]">
        <div v-if="getLoaderState" class="loader">
            <img src="../assets/logo_new.png">
        </div>
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
    import { mapActions} from 'vuex';

    export default {
        name: 'PageAbout',
        components: {
            ScheduleCard
        },
        mounted() {
            this.fetchDataSchedule()
        },
        computed:{
            getSchedule(){
                return this.$store.state.scheduleId
            },
            getLoaderState(){
                return !this.$store.state.loadState
            }
        },
        methods: {
            ...mapActions(['fetchDataSchedule']),
        }
    }
</script>
