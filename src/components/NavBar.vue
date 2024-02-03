<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="header-navbar flex flex-row items-center justify-center gap-2 w-screen fixed top-0 left-0">
        <button>Členovia</button>
        <button>
            <router-link active-class="link-active" to="/gallery">Galleria</router-link>
        </button>
        <button class="home-btn">
            <router-link to="/">Hlavná</router-link>
        </button>
        <button>
            <router-link active-class="link-active" to="/schedule">Rozvrh</router-link>
        </button>
        <button>
            <router-link active-class="link-active" to="/contact">Kontakt</router-link>
        </button>
    </div>
</template>

<style lang="scss">
    // $base-dark: #17171b;
    // $base-grey: #23282c;
    // $base-grey-dark: #171720;
    // $base-purple: #8063cb;
    // $base-text-color: #afaeb3;
    .header-navbar{
        background-color: $base-dark;
        z-index: 10;
        button{
            width: 100px;
            border-radius: 0;
            background-color: $base-dark;
            // &:hover{
            //     border: none;
            // }
            a{
                color: white;
            }
        }
        .home-btn{
            background-color: $base-purple;
        }
    }
    .link-active{
        color: $base-purple !important;
    }
</style>