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

        addTodo(state, { txt, todoId }) {
            let todo = todoService.getById(todoId)
            if (todo) todo.txt = txt.value
            else todo = { txt: txt.value, createdBy: state.user.username, done: false }
            todoService.save(todo)
            state.todos = todoService.query()

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

