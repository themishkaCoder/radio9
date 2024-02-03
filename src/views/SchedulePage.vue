<script setup>
    import ScheduleQuick from '../components/ScheduleQuick.vue';
    const weekday = ["Sunday","Monday", "Tuesday", "Wednesday"];

    const d = new Date();
    let currentDay = weekday[d.getDay()];


</script>

<template>
    <div class="grid grid-cols-2 grid-rows-2 gap-3 w-3/4 h-4/6 mx-auto p-7 rounded-3xl home -mt-40 mb-52">
        <!-- <h1>Rozvrh</h1> -->
        <ScheduleQuick v-for="day in weekday" set-mode="full" :full-mode-day="day">
            {{ day }}
        </ScheduleQuick>
    </div>
</template>