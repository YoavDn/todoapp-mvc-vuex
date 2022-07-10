import { asyncService } from './async-storage.service.js'
import { storageService } from './storage.service.js'
import { utilService } from './utils.service.js'


const KEY = 'TodosDB'

export const todoService = {
    query,
    getById,
    remove,
    save,
    getEmptyTodo,
    toggleDone
}

var gTodos = _createTodos()

function query() {
    // const todos = JSON.parse(JSON.stringify(gTodos))
    return asyncService.query(KEY)
}

function getById(id) {
    return gTodos.find(todo => todo._id === id)
}

function remove(todo) {
    // const idx = gTodos.findIndex(todo => todo._id === id)
    // gTodos.splice(idx, 1)
    return asyncService.remove(KEY, todo._id)

}

function save(todo) {
    if (!todo._id) return asyncService.post(KEY, todo)
    return asyncService.put(KEY, todo)
}

function toggleDone(todo) {
    return asyncService.put(KEY, todo)
}

function getEmptyTodo() {
    return {
        _id: '',
        txt: '',
        done: false,
    }
}

function _createTodos() {
    var todos = storageService.load(KEY)
    if (!todos || !todos.length) {
        todos = [_createTodo('Television 55 inch'), _createTodo('Tape Double Cassette')]
        storageService.store(KEY, todos)
    }
    return todos
}

function _createTodo(txt) {
    return {
        _id: utilService.makeId(),
        txt,
        done: false,
        createdBy: 'guest'
    }
}
