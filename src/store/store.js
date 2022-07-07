import { createStore } from 'vuex'
import { todoService } from '../services/todos.service'
import { utilService } from '../services/utils.service'

const store = createStore({
    state() {
        return {
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
        }
    }
})

export default store

