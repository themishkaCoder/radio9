<script setup>
    import { useStore } from 'vuex';
    import SoundWaves from './SoundWaves.vue';

    const store = useStore();
    const props = defineProps(['songTitle', 'songLink', 'currentTitle', 'currentIsPlay'])



    function setSong(title, url){
        store.dispatch('songs/setNewSong', {songTitle: title, songUrl: url});
    }
</script>
<template>
    <div v-if="songTitle == currentTitle" @click="setSong(props.songTitle, props.songLink)" style="background-color: #23282c" class="song rounded-3xl p-6 mb-2 flex flex-row items-center gap-4">
        <SoundWaves :light="false" v-if="songTitle == currentTitle && currentIsPlay == true"></SoundWaves>
        <button v-if="songTitle != currentTitle || currentIsPlay == false" class="play-btn rounded-full w-10 h-10">
            <i class="fa-solid fa-play"></i>
        </button>
        <p class="t text-2xl">{{ props.songTitle }}</p>
    </div>

    <div v-else @click="setSong(props.songTitle, props.songLink)" class="song rounded-3xl p-6 mb-2 flex flex-row items-center gap-4">
        <SoundWaves :light="false" v-if="songTitle == currentTitle && currentIsPlay == true"></SoundWaves>
        <button v-if="songTitle != currentTitle || currentIsPlay == false" class="play-btn rounded-full w-10 h-10">
            <i class="fa-solid fa-play"></i>
        </button>
        <p class="t text-2xl">{{ props.songTitle }}</p>
    </div>
</template>

<style lang="scss">
.song:hover{
    background-color: $base-grey;
    cursor: pointer;
    
}
.back
.song{
    p{
        color: $base-text-color;

    }
}
</style>