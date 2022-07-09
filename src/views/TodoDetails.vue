<script setup>
import { computed } from 'vue';

import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
const { state } = useStore()
const route = useRoute()
const { todoId } = route.params
const todo = computed(() => state.todos.filter(todo => todo._id === todoId))
const strDate = computed(() => new Date(todo.value[0].createdAt).toLocaleTimeString())

</script>

<template>
    <router-link to="/todo">&LeftArrow; Back</router-link>
    <section>
        <h2>{{ todo[0].txt }}</h2>
        <h2>Created By:{{ todo[0].createdBy }}</h2>
        <h2>Created At: {{ strDate }}</h2>
    </section>
</template>