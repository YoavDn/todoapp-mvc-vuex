<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()


function addTodo(e) {
    console.log(e.target.value);
    const text = e.target.value
    store.commit('addTodo', text)
    router.push('/todo')
    e.target.value = ''
}

</script>


<template>
    <router-link to="/todo">&leftarrow; Back</router-link>
    <div>
        <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"
            @keyup.enter="addTodo">
    </div>
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