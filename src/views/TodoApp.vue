<script setup>

import { useStore } from 'vuex';
import TodoList from '../components/TodoList.vue';
import TodoFilter from '../components/TodoFilter.vue'
import { computed } from '@vue/reactivity';
import store from '../store/store';

const { state } = useStore()


const filters = {
    all: todos => todos,
    completed: todos => todos.filter(todo => todo.done),
    active: todos => todos.filter(todo => !todo.done)
}

const filterTodos = computed(() => {
    const regex = new RegExp(state.filterBy.query, 'i')
    const queryFilter = state.todos.filter(todo => regex.test(todo.txt))
    return filters[state.filterBy.filter](queryFilter)
})


//sending to store 
const removeTodo = (todo) => store.commit('removeTodo', todo)
const toggleTodo = (todo) => store.commit('toggleTodo', todo)
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

