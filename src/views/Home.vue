<template>
    <q-page>
        <div class="hero-bg">
            <div class="hero flex column justify-between q-pa-sm">
                <div>
                    <img src="../assets/logo_new.png">
                </div>
                <div>
                    <div class="title-1 mb10">
                        newport<br>harbor<br>football
                    </div>
                    <p>
                        The Official App
                    </p>
                </div>
            </div>
        </div>
        <div class="news">
            <div class="title-2 q-pa-sm mt10">Tar Football News</div>
            <q-card class="news-card mt10 mb10" v-for="(newsTile, $index) in getPosts.data" :key="$index">
                <img class="news-card-bg" :src="newsTile._embedded['wp:featuredmedia'][0].link"
                     :alt="newsTile.title.rendered">
                <div class="news-card-overlay"></div>
                <a target="_blank" :href="newsTile.link" class="news-card-content q-pa-sm">
                    <div class="title-3">{{newsTile.title.rendered}}</div>
                    <p class="mb0"><small>{{dateConvert(newsTile.date)}}</small></p>
                    <div class="read-more">Read More</div>
                </a>
            </q-card>
        </div>
    </q-page>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'PageHome',
        mounted() {
            this.fetchDataPosts();
        },
        computed: mapGetters(['getPosts']),
        methods: {
            ...mapActions(['fetchDataPosts']),
            dateConvert(time) {
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                const date = new Date(time);
                const month = months[date.getUTCMonth()];
                const day = date.getUTCDate();
                const year = date.getUTCFullYear();
                return month + " " + day + ", " + year;
            }
        }
    }
</script>

<style lang="scss">
</style>
