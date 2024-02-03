<script setup>
    import SoundWavesVue from './SoundWaves.vue';
    const props = defineProps(['playName', 'playTimeFrom', 'playTimeTo', 'playDay'])
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let currentDay = weekday[d.getDay()];
    let currDay = 'Sunday'
    // let hours = d.getHours().toLocaleString('sk-SK')
    let hours = '20'
    


</script>
<template>
    <div v-if="props.playTimeFrom.hours == hours && currDay == props.playDay" class="schedule-item rounded-3xl p-6 mb-2 flex flex-row justify-between items-center">
        <div class="item-info">
            <h2 class="t text-2xl"><i class="fa-solid fa-music" aria-hidden="true"></i> {{ props.playName }}</h2>
            <p>{{ props.playTimeFrom.hours }}:{{ props.playTimeFrom.minutes }} - {{ props.playTimeTo.hours }}:{{ props.playTimeTo.minutes }}</p>
        </div>
        <!-- <i class="fa-solid fa-microphone-lines"></i> -->
        <SoundWavesVue :light="true" :icon="true"></SoundWavesVue>
    </div>

    <div v-else class="schedule-item-light rounded-3xl p-6 mb-2 flex flex-col">
        <h2 class="t text-2xl"><i class="fa-solid fa-music" aria-hidden="true"></i> {{ props.playName }}</h2>
        <p>{{ props.playTimeFrom.hours }}:{{ props.playTimeFrom.minutes }} - {{ props.playTimeTo.hours }}:{{ props.playTimeTo.minutes }}</p>
    </div>

</template>

<style lang="scss">
    .schedule-item{
        background-color: $base-dark;
    }
    .schedule-item-light {
        background-color: #6d4fbd;
    }
</style>