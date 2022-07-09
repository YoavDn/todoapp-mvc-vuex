<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter()
const store = useStore()

const user = reactive({
  username: '',
  pass: '',
})

const addUser = () => {
  store.commit('addUser', user)
  user.username = ''
  user.pass = ''
  if (!store.state.user) return
  router.push('/todo')
}

</script>

<template>
  <main class="home-main">
    <h2>Welcome to Todos !</h2>
    <form @submit.prevent="addUser">
      <input v-model="user.username" type="text" placeholder="username">
      <input v-model="user.pass" type="text" placeholder="password">
      <button>login </button>
    </form>
    <router-link to="/todo">login as Guest</router-link>
  </main>
</template>


<style>
.home-main {
  text-align: center;
  margin-block: 3rem;
}
</style>