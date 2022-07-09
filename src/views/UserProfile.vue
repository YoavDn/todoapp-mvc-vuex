<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

</script>


<template>
    <h2> Hellow {{ route.params.username }}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi error incidunt perspiciatis itaque at,
        quia tempora consequuntur sapiente molestias excepturi veritatis ipsum nihil necessitatibus impedit ducimus
        sequi. Minima, officia.
    </p>

</template>