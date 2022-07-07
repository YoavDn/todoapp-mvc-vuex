<script setup>
import TodoPreview from './TodoPreview.vue';
defineEmits(['removeTodo', 'toggleTodo'])
const props = defineProps(['todos'])

</script>

<template>
    <router-link class="router-link" to="/todo/edit">Add todo</router-link>

    <div class="list-container">
        <h4>{{ props.todos.length }} Total Todos</h4>
        <div v-for="(todo, idx) in props.todos" class="todo-item">
            <h2 class="todo-num">{{ idx }}</h2>
            <input name="check" type="checkbox" v-model="todo.done" @change="$emit('toggleTodo', todo)">
            <todo-preview :todo="todo" />
            <button @click="$emit('removeTodo', todo)" class="remove-todo-btn">X</button>
        </div>
    </div>

</template>



<style >
.list-container {
    width: 60%;
    margin: auto;
}

.todo-num {
    margin-inline-end: 1rem;
}

.todo-item {
    position: relative;
    display: flex;
    border-bottom: solid black 1px;
}

input[type="checkbox"] {
    margin-inline: 2rem;
    width: 20px;
}

.remove-todo-btn {
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 14px;
    border: none;
    background: none;
}

.router-link {
    cursor: pointer;
    display: block;
    color: black;
    text-align: center;
    margin-block: 1rem;


}
</style>