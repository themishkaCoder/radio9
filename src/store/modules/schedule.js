const state = () => ({
    schedule: [
        {
            name: 'Sunday',
            playlist: [
                {
                    playName: 'OMM',
                    playFrom: {hours: 18, minutes: 0 },
                    playTo: {hours: 19, minutes: 0},
                },
                {
                    playName: 'ČS Music',
                    playFrom: {hours: 19, minutes: 0 },
                    playTo: {hours: 20, minutes: 0},
                },
                {
                    playName: 'NajnTajm',
                    playFrom: {hours: 20, minutes: 0 },
                    playTo: {hours: 21, minutes: 0},
                },
                {
                    playName: 'F1',
                    playFrom: {hours: 21, minutes: 0 },
                    playTo: {hours: 22, minutes: 0},
                },
            ]
        },
        {
            name: 'Monday',
            playlist: [
                {
                    playName: 'RockMix',
                    playFrom: {hours: 18, minutes: 0 },
                    playTo: {hours: 19, minutes: 0},
                },
                {
                    playName: 'Kondenzátor',
                    playFrom: {hours: 19, minutes: 0 },
                    playTo: {hours: 20, minutes: 0},
                },
                {
                    playName: 'Výsluch',
                    playFrom: {hours: 20, minutes: 0 },
                    playTo: {hours: 22, minutes: 0},
                },
                {
                    playName: 'DJ Middray',
                    playFrom: {hours: 22, minutes: 0 },
                    playTo: {hours: 23, minutes: 0},
                },
            ]
        },
        {
            name: 'Tuesday',
            playlist: [
                {
                    playName: 'OMM',
                    playFrom: {hours: 18, minutes: 0 },
                    playTo: {hours: 19, minutes: 0},
                },
                {
                    playName: 'Pľetky',
                    playFrom: {hours: 19, minutes: 0 },
                    playTo: {hours: 20, minutes: 0},
                },
                {
                    playName: '9 želaní',
                    playFrom: {hours: 20, minutes: 0 },
                    playTo: {hours: 21, minutes: 0},
                },
                {
                    playName: 'Davaj het',
                    playFrom: {hours: 21, minutes: 0 },
                    playTo: {hours: 22, minutes: 0},
                },
            ]
        },
        {
            name: 'Wednesday',
            playlist: [
                {
                    playName: 'RetroNajn',
                    playFrom: {hours: 18, minutes: 0 },
                    playTo: {hours: 19, minutes: 0},
                },
                {
                    playName: 'TechNajn',
                    playFrom: {hours: 19, minutes: 0 },
                    playTo: {hours: 21, minutes: 0},
                },
                {
                    playName: 'Vojna opozít',
                    playFrom: {hours: 21, minutes: 0 },
                    playTo: {hours: 22, minutes: 0},
                },
                {
                    playName: 'Cirkulárka',
                    playFrom: {hours: 22, minutes: 0 },
                    playTo: {hours: 23, minutes: 0},
                },
            ]
        }
    ]
})

const getters = {
    getSchedule(state){
        
        return state.schedule
    }
}

const actions = {

}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}