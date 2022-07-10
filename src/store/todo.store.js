import { todoService } from '../services/todos.service.js';
import { utilService } from '../services/utils.service'
import { userStore } from './user.store';


export const todoStore = {
    state: {
        todos: todoService.query(),
        filterBy: {
            query: '',
            filter: 'all'
        }
    },
    mutations: {
        setFilter(state, { filter, query }) {
            state.filterBy.filter = filter
            state.filterBy.query = query
        },

        toggleTodo(state, todo) {
            todo.done = !todo.done
            todoService.save(todo)
            state.todo = todoService.query()
        },
        addTodo(state, { txt, todoId }) {
            let todo = todoService.getById(todoId)
            if (todo) todo.txt = txt.value
            else todo = { txt: txt.value, createdBy: userStore.state.user.username, done: false }
            todoService.save(todo)
            state.todos = todoService.query()

        },
        removeTodo(state, { _id }) {
            todoService.remove(_id)
            state.todos = todoService.query()
        },
    },
    getters: {
        getTodos({ todos }) {
            return todos
        },
        getFilterBy({ filterBy }) {
            return filterBy
        }
    }
}