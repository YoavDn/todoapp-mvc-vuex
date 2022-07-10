<script setup>
import { reactive } from 'vue';
const emit = defineEmits(['setFilter'])

const filterBy = reactive({
    query: '',
    filter: 'all'
})
const setFilter = () => emit('setFilter', filterBy)

</script>

<template>

    <form class="filter-form">
        <label for="query">Todo Name</label>
        <input type="text" placeholder="Dosn't do shit" @input="setFilter" v-model="filterBy.query">
        <select @change="setFilter" v-model="filterBy.filter">
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
        </select>

    </form>
</template>

<style>
.filter-form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
}

.filter-form input {
    padding: .4rem;
    font-size: 16px;
}

.filter-form label {
    text-align: center;
    margin-block: 1rem;
    font-weight: 600;
}
</style>