<script setup>
import SongsListArea from '../components/SongsListArea.vue'
import ScheduleQuick from '../components/ScheduleQuick.vue';
</script>

<template>
<div class="grid grid-cols-2 gap-3 w-3/4 h-4/6 mx-auto p-7 rounded-3xl home -mt-40 mb-52">
    
    <SongsListArea></SongsListArea>
    <ScheduleQuick set-mode="short"></ScheduleQuick>

</div>
</template>

<style lang="scss">
    .home{
        background-color: $base-dark;
    }
</style>