<script setup>
import { RouterView } from 'vue-router';
import { useStore } from 'vuex';
// import HelloWorld from './components/HelloWorld.vue'
import NavBarVue from './components/NavBar.vue';
import GlobalPlayer from './components/GlobalPlayer.vue';
// import * as THREE from 'three';
const store = useStore();

const testUrl = 'https://fine.sunproxy.net/file/eDFlWHlUeG04VzR5RmR1by8zWXk4czVUVm44QkpiWEZET1lrenJxQlJNbDN1MlVxRWVFaUIwTmcrQWo2SEtCcEoydDNtSGZDeUIxYW1jZDNyNzBxdUFoQXR6T2dXemYvdks2a1pJTGl3dk09/Marilyn_Manson_-_The_Fight_Song_(ColdMP3.com).mp3'
let playerProps = store.getters['songs/getPlayerProps']

function goLive(){
  store.dispatch('songs/setNewSong', {songTitle: 'Live', songUrl: testUrl})
}
</script>

<template>
  <div class="">
    <NavBarVue></NavBarVue>
    <div class="header h-screen">
      <img class="w w-2/4 mx-auto mt-32" src="./assets/logoRadio.png" alt="">
      <div class="live-btn flex justify-center">
        <button @click="goLive()" v-if="playerProps.isPlaying == false || playerProps.isLive == false" class="play-live-btn rounded-full w-20 h-20">
          <i class="fa-solid fa-play text-3xl"></i>
          <!-- <i class="fa-solid fa-microphone-lines text-3xl"></i> -->

        </button>

        <button @click="goLive()" v-if="playerProps.isPlaying == true && playerProps.isLive == true" class="play-live-btn rounded-full w-20 h-20">
          <i class="fa-solid fa-pause text-3xl"></i>
        </button>
      </div>
      <div class="stars">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>
    </div>
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <RouterView></RouterView>
    <GlobalPlayer></GlobalPlayer>
  </div>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.play-live-btn {
  border: 3px solid $base-purple;

  i {
    position: relative;
    // right: 5px;
    // bottom: 2px;
    left: 1px;
    top: 2px;
  }
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}



@mixin sp-layout {
  @media screen and (max-width: 750px) {
    @content;
  }
}

body {
  // display: flex;
  // justify-content: center;
  // align-items: center;

}

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.stars {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  transform: rotate(-45deg);
  z-index: -1;
}

.star {
  $star-count: 50;
  --star-color: var(--primary-color);
  --star-tail-length: 6em;
  --star-tail-height: 2px;
  --star-width: calc(var(--star-tail-length) / 6);
  --fall-duration: 9s;
  --tail-fade-duration: var(--fall-duration);

  position: absolute;
  top: var(--top-offset);
  left: 0;
  width: var(--star-tail-length);
  height: var(--star-tail-height);
  color: var(--star-color);
  background: linear-gradient(45deg, currentColor, transparent);
  border-radius: 50%;
  filter: drop-shadow(0 0 6px currentColor);
  transform: translate3d(104em, 0, 0);
  animation: fall var(--fall-duration) var(--fall-delay) linear infinite, tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite;

  @include sp-layout {
    // For mobile performance, tail-fade animation will be removed QAQ
    animation: fall var(--fall-duration) var(--fall-delay) linear infinite;
  }

  @for $i from 1 through $star-count {
    &:nth-child(#{$i}) {
      --star-tail-length: #{random_range(500em, 750em) / 100};
      --top-offset: #{random_range(0vh, 10000vh) / 100};
      --fall-duration: #{random_range(6000, 12000s) / 1000};
      --fall-delay: #{random_range(0, 10000s) / 1000};
    }
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: calc(var(--star-width) / -2);
    width: var(--star-width);
    height: 100%;
    background: linear-gradient(45deg, transparent, currentColor, transparent);
    border-radius: inherit;
    animation: blink 2s linear infinite;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
}

@keyframes fall {
  to {
    transform: translate3d(-30em, 0, 0);
  }
}

@keyframes tail-fade {

  0%,
  50% {
    width: var(--star-tail-length);
    opacity: 1;
  }

  70%,
  80% {
    width: 0;
    opacity: 0.4;
  }

  100% {
    width: 0;
    opacity: 0;
  }
}

@keyframes blink {
  50% {
    opacity: 0.6;
  }
}
</style>
