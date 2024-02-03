<script setup>
import GalleryItem from '../components/GalleryItem.vue';
import { useStore } from 'vuex';

const store = useStore();

// Array of img links
let imgLinksArray = store.getters['gallery/getImgLinks']

</script>

<template>
    <div class="grid gap-3 w-3/4 h-4/6 mx-auto p-7 rounded-3xl home -mt-40 mb-52">
        <h1>Galleria</h1>
        <GalleryItem></GalleryItem>
    </div>
</template>

<style lang="scss"></style>