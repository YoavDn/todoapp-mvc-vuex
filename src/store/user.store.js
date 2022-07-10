import { userService } from '../services/user.service.js';



export const userStore = {
    state: {
        user: userService.query(),
    },
    mutations: {
        addUser(state, user) {
            state.user = userService.validateUser(user)
        },
        setUserPrefs(state, userPrefs) {
            userService.updateUserFrefs(userPrefs)
            state.user.prefs = userPrefs
        },
    },
    getters: {
        getUserPrefs(state) {
            return state.user.prefs
        },
        getUser({ user }) {
            return user
        }
    },
}