import { storageService } from './storage.service.js'
import { utilService } from './utils.service.js'


const KEY = 'TodosDB'

export const todoService = {
    query,
    getById,
    remove,
    save,
    getEmptyTodo,
}

var gTodos = _createTodos()

// TODO: support paging and filtering and sorting
function query() {
    const todos = JSON.parse(JSON.stringify(gTodos))
    return todos
}

function getById(id) {
    return gTodos.find(todo => todo._id === id)
}

function remove(id) {
    const idx = gTodos.findIndex(todo => todo._id === id)
    gTodos.splice(idx, 1)
    storageService.store(KEY, gTodos)
}

function save(todo) {
    const TodoToSave = JSON.parse(JSON.stringify(todo))
    const savedTodo = (TodoToSave._id) ? _update(TodoToSave) : _add(TodoToSave)

    storageService.store(KEY, gTodos)
    return savedTodo
}


function _add(todo) {
    todo._id = utilService.makeId()
    todo.createdAt = Date.now()
    gTodos.push(todo)
    return todo
}

function _update(todo) {
    const idx = gTodos.findIndex(currTodo => currTodo._id === todo._id)
    gTodos.splice(idx, 1, todo)
    return todo
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
