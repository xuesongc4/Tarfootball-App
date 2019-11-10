<template>
    <div class="game-container">
        <div class="game-header flex justify-between">
            <div class="date">{{data.date}}</div>
            <div class="location">{{data.location}}</div>
        </div>
        <div class="game-content">
            <div class="helmet home">
                <img src="../assets/home-helmet.png" alt="Tar Helmet">
            </div>
            <div class="vs">
                VS
            </div>
            <div class="vs-container">
                <div class="home-team">
                    <div class="school">
                        newport
                    </div>
                    <div class="name">
                        sailors
                    </div>
                </div>
                <div class="away-team">
                    <div class="school">
                        {{data['opponent-name']}}
                    </div>
                    <div class="name">
                        {{data['opponent-team-name']}}
                    </div>
                </div>
                <div class="caption">{{data['game-caption']}}</div>
            </div>
            <div class="helmet away">
                <img :src="data['opponent-helm']" :alt="data['opponent-name']">
            </div>
        </div>
        <div class="game-description">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ScheduleCard",
        props: {
            data: Object
        },
    }
</script>

<style scoped>
</style>