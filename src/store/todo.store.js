import { todoService } from '../services/todos.service.js';
import { utilService } from '../services/utils.service'
import { userStore } from './user.store';


export const todoStore = {
    state: {
        todos: [],
        filterBy: {
            query: '',
            filter: 'all'
        }
    },
    mutations: {
        setTodos(state, { todos }) {
            state.todos = todos
        },

        setFilter(state, { filter, query }) {
            state.filterBy.filter = filter
            state.filterBy.query = query
        },

        setToggle(state, { todo }) {
            // state.todos = todos
            const idx = state.todos.findIndex(currTodo => currTodo._id === todo._id)
            state.todos.splice(idx, 1, todo)
        },
        saveTodo(state, { todos }) {
            state.todos = todos
        },
        setRemoved(state, todo) {
            const idx = state.todos.findIndex(currTodo => currTodo._id === todo._id)
            state.todos.splice(idx, 1)
        },
    },
    getters: {
        getTodos({ todos }) {
            return todos
        },
        getFilterBy({ filterBy }) {
            return filterBy
        }
    },
    actions: {
        loadTodos({ commit }) {
            return todoService.query()
                .then(todos => {
                    commit({ type: 'setTodos', todos })
                    return todos
                })

        },

        removeTodo({ commit }, { todo }) {
            console.log(todo);
            return todoService.remove(todo)
                .then((todos) => commit({ type: 'setRemoved', todos }))
        },

        addTodo({ commit }, { txt, todoId }) {
            const todo = { txt: txt.value, _id: todoId, done: false }
            return todoService.save(todo)
                .then(todos => {
                    commit({ type: 'saveTodo', todos })
                })
        },
        toggleTodo({ commit }, { todo }) {
            console.log(todo);
            const newTodo = { ...todo }
            newTodo.done = !newTodo.done

            return todoService.toggleDone(newTodo)
                .then(todo => commit({ type: 'setToggle', todo }))

        },
    }
}