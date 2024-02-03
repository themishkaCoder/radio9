import { createStore, createLogger } from 'vuex'
import songs from './modules/songs'
import schedule from './modules/schedule'
import gallery from './modules/gallery'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
      songs,
      schedule,
      gallery
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})