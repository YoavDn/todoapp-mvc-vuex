<script setup>
import { utilService } from '../services/utils.service.js'
import TodoList from '../components/TodoList.vue';
import { computed, reactive, ref } from 'vue';
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';

const route = useRoute()
const store = useStore()
const state = useStore().state.todoStore

let prefsOpen = ref(false)
let openList = ref(false)

const userTodos = computed(() => state.todos.filter(todo => todo.createdBy === route.params.username))
const userPrefs = reactive({
    color: store.getters.getUserPrefs.color,
    bgColor: store.getters.getUserPrefs.bgColor
})

const togglePrefs = () => prefsOpen.value = !prefsOpen.value
const setUserPrefs = () => store.commit('setUserPrefs', userPrefs)
const timeSince = (date) => utilService.timeSince(date)

</script>


<template>
    <button @click="togglePrefs">Prefs</button>
    <form v-if="prefsOpen">
        <div class="clr-input">
            <label for="color">Select Color:</label>
            <input v-model="userPrefs.color" @input="setUserPrefs" name="color" type="color">
        </div>
        <div class="clr-input">
            <label for=" color">Select background Color:</label>
            <input v-model="userPrefs.bgColor" name="bg-color" type="color" @input="setUserPrefs">
        </div>
    </form>

    <h2> Hellow {{ route.params.username }}</h2>
    <h3>{{ userTodos.length }} total todos</h3>
    <section class="activites">
        <h3>activites</h3>
        <ul>
            <li v-for="todo in userTodos">
                <p>{{ todo.txt }} - created {{ timeSince(todo.createdAt) }} ago </p>
            </li>
        </ul>
    </section>
    <button class="open-list-btn" @click="openList = !openList">See Todos</button>
    <todo-list v-if="openList" :todos="userTodos" />


</template>

<style scoped>
.clr-input {
    display: flex;
    justify-content: space-between;
    width: 250px;
    margin-bottom: 1rem;
}

form {
    margin-block: 1rem;
    display: flex;
    flex-direction: column;
    margin-inline-start: 2rem;
    align-items: flex-start;
}

.activites {
    text-align: center;
}

.open-list-btn {
    padding: .5rem;
    cursor: pointer;
    display: block;
    text-align: center;
    margin: auto;
    margin-block: 3rem;
}
</style>