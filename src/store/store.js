import { createStore } from 'vuex'
import { todoStore } from './todo.store.js';
import { userStore } from './user.store.js';
const store = createStore({
    strict: true,
    modules: {
        userStore,
        todoStore
    }
})

export default store

