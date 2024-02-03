const state = () => ({
    imgLinks: [
        'https://t3.ftcdn.net/jpg/02/87/35/70/360_F_287357045_Ib0oYOxhotdjOEHi0vkggpZTQCsz0r19.jpg',
    ]
})

const getters = {
    getImgLinks(state){
        
        return state.imgLinks
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