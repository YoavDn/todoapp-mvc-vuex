<script setup>
import { useToast } from "vue-toastification";

import { ref } from 'vue';
import { useStore } from 'vuex';
import TodoList from '../components/TodoList.vue';
import TodoFilter from '../components/TodoFilter.vue'
import { computed } from '@vue/reactivity';

const toast = useToast();



const store = useStore()
store.dispatch('loadTodos')

const filters = {
    all: todos => todos,
    completed: todos => todos.filter(todo => todo.done),
    active: todos => todos.filter(todo => !todo.done)
}

const filterBy = store.getters.getFilterBy
const todos = computed(() => store.getters.getTodos)


const filterTodos = computed(() => {
    const regex = new RegExp(filterBy.query, 'i')
    const queryFilter = todos.value.filter(todo => regex.test(todo.txt))
    return filters[filterBy.filter](queryFilter)
})

//sending to store 
const removeTodo = (todo) => store.dispatch({ type: 'removeTodo', todo })
    .then(() => toast("Todo deleted", { timeout: 1000 }))
const toggleTodo = (todo) => store.dispatch({ type: 'toggleTodo', todo })
const setFilter = (filter) => store.commit('setFilter', filter)
</script>

<template>
    <todo-filter @setFilter="setFilter" />
    <todo-list :todos="filterTodos" @removeTodo="removeTodo" @toggleTodo="toggleTodo" />
</template>

<style>
h2 {
    text-align: center;
    margin-block: 2rem;
}
</style>

