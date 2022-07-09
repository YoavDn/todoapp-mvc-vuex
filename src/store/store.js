import { createStore } from 'vuex'
import { todoService } from '../services/todos.service'
import { userService } from '../services/user.service'
import { utilService } from '../services/utils.service'

const store = createStore({
    state() {
        return {
            user: userService.query(),
            todos: todoService.query(),
            filterBy: {
                query: '',
                filter: 'all'
            }

        }
    },
    mutations:
    {
        setFilter(state, filter) {
            state.filterBy = filter
        },

        addTodo(state, txt) {
            const todo = { txt, done: false }
            const savedTodo = todoService.save(todo)
            state.todos.push(savedTodo)
        },
        removeTodo(state, { _id }) {
            todoService.remove(_id)
            state.todos = todoService.query()
        },
        toggleTodo(state, todo) {
            todoService.save(todo)
            state.todos = todoService.query()
        },
        addUser(state, user) {
            console.log(user);
            state.user = userService.validateUser(user)
        }
    },
    getters: {
        getUser(state) {
            return state.user
        }
    }
})

export default store

