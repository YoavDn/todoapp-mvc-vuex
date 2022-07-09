<script setup>
import TodoList from '../components/TodoList.vue';
import { computed } from 'vue';
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
const route = useRoute()
const { state } = useStore()

const userTodos = computed(() => {
    return state.todos.filter(todo => todo.createdBy === route.params.username)
})

</script>


<template>
    <h2> Hellow {{ route.params.username }}</h2>
    <h3>{{ userTodos.length }} total todos</h3>
    <todo-list :todos="userTodos" />


</template>