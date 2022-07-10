<script setup>
import AppHeader from './components/AppHeader.vue';
import { useStore } from 'vuex';
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <app-header />
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

#app {
  font-family: 'Inter', sans-serif;
}
</style>
