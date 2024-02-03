const state = () => ({
    all: [],
    name: "test",
    age: 10,
    playerProps:{
        isPlaying: false,
        isLive: false,
        songName: 'Live',
        songURL: 'https://download.3mp3.buzz/s/Avatar-Let-It-Burn.mp3',
        songDuration: 0,
        

    },
    songsList: [
        {
            name: 'Another Life',
            url: 'https://mp3uk.net/mp3/files/motionless-in-white-another-life-mp3.mp3',
            key: 0,
        },

        {
            name: 'Let It Burn',
            url: 'https://download.3mp3.buzz/s/Avatar-Let-It-Burn.mp3',
            key: 1,
        }
    ]
})

// getters
const getters = {
    getSongsList(state){
        return state.songsList
    },
    getPlayerProps(state){
        return state.playerProps
    }
}

// actions
const actions = {
    setNewSong({commit}, payload){
        commit('setNewSongState', payload)
    },
    setControl({commit}, payload){
        
        commit('setPlayPause', payload)
    },

}

// mutations
const mutations = {
    setNewSongState(state, payload){
        state.playerProps.songName = payload.songTitle
        state.playerProps.songURL = payload.songUrl
        state.playerProps.isPlaying = true
        if(payload.songTitle == 'Live'){
            state.playerProps.isLive = true;
        }else{
            state.playerProps.isLive = false;
        }
    },
    setPlayPause(state, payload){
        state.playerProps.isPlaying = payload
    },


}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}