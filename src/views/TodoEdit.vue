<script setup>
import { useToast } from "vue-toastification";
import { ref } from 'vue'
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router'
const store = useStore()
const router = useRouter()
const route = useRoute()
const toast = useToast()
const { todoId } = route.params
const txt = ref('')



function addTodo() {
    store.dispatch('addTodo', { txt, todoId })
    router.push('/todo')
    txt.value = ''
    toast.success('added Todo succsefullly', { timeout: 1000 })
}

</script>


<template>
    <router-link to="/todo">&leftarrow; Back</router-link>
    <section>
        <form @submit.prevent="addTodo"></form>
        <input v-model="txt" class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"
            @keyup.enter="addTodo">
        <button @click="addTodo" v-if="route.params.todoId">Update Todo</button>
        <button @click="addTodo" v-else>Add Todo</button>
    </section>
</template>



<style>
.new-todo {
    display: block;
    margin: auto;
    width: 350px;
    padding: .4rem 1rem;
    font-size: 16px;
}
</style>