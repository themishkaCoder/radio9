<script setup>
    import { useStore } from 'vuex';
    import ScheduleItem from './ScheduleItem.vue';

    const store = useStore();
    const props = defineProps(['setMode', 'fullModeDay'])
    let nowDay
    let scheduleArray
    let currentDay

    function scheduleMode(setMode, fullModeDay){
        if(setMode == 'short'){
            // Short mode shows you what is playing only in current day
            // Need to edit for full work(now it is beta)
            nowDay = 'Sunday'
            scheduleArray = store.getters['schedule/getSchedule']
            currentDay = scheduleArray.find((element)=>element.name == nowDay)
        }else if(setMode == 'full'){
            nowDay = fullModeDay
            console.log(fullModeDay)
            scheduleArray = store.getters['schedule/getSchedule']
            currentDay = scheduleArray.find((element)=>element.name == nowDay)
        }
    }
    scheduleMode(props.setMode, props.fullModeDay)

    // const nowDay = 'Monday'
    // let scheduleArray = store.getters['schedule/getSchedule']
    // let currentDay = scheduleArray.find((element)=>element.name == nowDay)

</script>

<template>
    <div class="schedule-quick p-6 rounded-3xl">
        <h1 v-if="props.setMode == 'short'" class="mb-4 text-right">Čo hráme dnes?</h1>
        <h1 v-else class="mb-4 text-right"><slot></slot></h1>


        <ScheduleItem v-for="item in currentDay.playlist"
        :play-name="item.playName"
        :play-time-from="item.playFrom"
        :play-time-to="item.playTo"
        :play-day="nowDay"></ScheduleItem>
    </div>
</template>

<style lang="scss">
    .schedule-quick{
        background-color: $base-purple;
    }
</style>