<script setup>
import SongItemVue from '../components/SongItem.vue';
import { useStore } from 'vuex';

const store = useStore();

let songsArray = store.getters['songs/getSongsList']
let playerProps = store.getters['songs/getPlayerProps']
// let currentSongProps = {
//     currentName: playerProps.songName,
//     currentIsPlaying: playerProps.isPlaying,
// }



</script>

<template>
    <div class="songs-list">

        <SongItemVue v-for="song in songsArray"
        :song-link="song.url"
        :song-title="song.name"
        :current-title="playerProps.songName"
        :current-is-play="playerProps.isPlaying"></SongItemVue>
    </div>
</template>