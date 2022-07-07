<script setup>
const props = defineProps(['todo'])
</script>

<template>
    <h2 :class="{ complete: todo.done }">{{ props.todo.txt }}</h2>
</template>


<style>
 .complete {
     text-decoration: line-through;
 }
</style>
