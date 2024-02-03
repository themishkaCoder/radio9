<script setup>
    import { watch, ref } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    let playerProps = store.getters['songs/getPlayerProps']

    // let songsArray = store.getters['songs/getSongsList']
    // let test = 'https://download.3mp3.buzz/s/Avatar-Let-It-Burn.mp3'
    // https://download.3mp3.buzz/s/Avatar-Let-It-Burn.mp3
    // https://mp3uk.net/mp3/files/motionless-in-white-another-life-mp3.mp3
    let audioElement = new Audio(playerProps.songURL);
    let songDuration = ref(0);
    let newDuration = ref(0);
    let visualDuration = ref('');
    let newVisualDuration = ref('');
    let volumeControl = ref(100);

    let intervalDuration

    // songDuration.value = audioElement.duration

    // audioElement.play();

    function changeSongLink(newLink){
        // test = 'https://mp3uk.net/mp3/files/motionless-in-white-another-life-mp3.mp3';
        audioElement.src = newLink
        // songDuration.value = audioElement.duration
        // audioElement.play()
        // console.log(audioElement.duration)
        getSongDuration()
    }

    function changeVolume(){
        audioElement.volume = volumeControl.value / 100
    }

    async function getSongDuration(){
        await audioElement.play()
        songDuration.value = audioElement.duration

        const minutes = Math.floor(songDuration.value / 60);
        const seconds = Math.round(songDuration.value % 60) 
        visualDuration.value = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
        
        intervalDuration = setInterval(()=>{
            newDuration.value = audioElement.currentTime
            const newMinutes = Math.floor(newDuration.value / 60);
            const newSeconds = Math.round(newDuration.value % 60) 
            newVisualDuration.value = `${padTo2Digits(newMinutes)}:${padTo2Digits(newSeconds)}`;
        }, 1000)
    }


    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    function controlAudio(controlState){
        store.dispatch('songs/setControl', controlState)
    }

    function setNewRange(){
        audioElement.currentTime = newDuration.value
    }

    // console.log(audioElement.duration)
    watch(()=>audioElement.currentTime, (newD, oldD)=>{
        console.log(newD);
    })

    watch(()=>playerProps.songURL, (newURL, oldURL) => {
        // console.log(newURL)
        changeSongLink(newURL)
    })
    watch(()=>playerProps.isPlaying, (newState, oldState) => {
        // console.log(newURL)
        if(newState == false && playerProps.isLive == true){
            audioElement.muted = true;
        }else if(newState == false && playerProps.isLive == false){
            audioElement.pause();
            clearInterval(intervalDuration);
        }else if(newState == true && (playerProps.isLive == false || playerProps.isLive == true)){
            audioElement.muted = false
            audioElement.play()
            intervalDuration = setInterval(()=>{
            newDuration.value = audioElement.currentTime
            const newMinutes = Math.floor(newDuration.value / 60);
            const newSeconds = Math.round(newDuration.value % 60) 
            newVisualDuration.value = `${padTo2Digits(newMinutes)}:${padTo2Digits(newSeconds)}`;
        }, 1000)
        }
    })
</script>

<template>
    <div class="global-player w-screen h-20 fixed bottom-0 left-0 flex justify-center items-center flex-col">
        <button @click="controlAudio(true)" v-if="playerProps.isPlaying == false" class="play-btn rounded-full w-10 h-10">
            <i class="fa-solid fa-play"></i>
        </button>
        <button @click="controlAudio(false)" v-if="playerProps.isPlaying == true" class="play-btn rounded-full w-10 h-10">
            <i class="fa-solid fa-pause"></i>
        </button>
        <div class="timeline w-2/4 flex flex-row items-center justify-center gap-3">
            
            <div class="w-12 ">{{ newVisualDuration }}</div>
            <input class="w w-96" @change="setNewRange()" v-model="newDuration" type="range" id="vol" name="vol" min="0" :max="songDuration" >
            <div class="w-12 ">{{ visualDuration }}</div>

            
        </div>
        <div class="sound-control-level absolute left-5 top-12 flex flex-row items-center gap-2">
            <i class="fa-solid fa-volume-high text-xl"></i>
            <input v-model="volumeControl" @change="changeVolume()" class="w-20" type="range" name="" id="" min="0" max="100">
        </div>
    </div>
</template>

<style lang="scss">
    // $base-dark: #17171b;
    // $base-grey: #23282c;
    // $base-grey-dark: #171720;
    // $base-purple: #8063cb;
    // $base-text-color: #afaeb3;
    .play-btn{
        border: 1px solid $base-purple;
        i{
            position: relative;
            right: 5px;
            bottom: 2px;
        }
    }
    .global-player{
        background-color: $base-dark;
        z-index: 10;
        border-top: 2px solid $base-purple;
    }
</style>