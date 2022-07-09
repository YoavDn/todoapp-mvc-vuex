<script setup >
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
const store = useStore()
const router = useRouter()
const user = store.state.user

const toUserProfile = () => {
    router.push(`/user/${user.username}`)
}

</script>

<template>
    <header :style="{ 'background-color': store.state.user.prefs.bgColor }" class="app-header">
        <h2 :style="{ color: store.state.user.prefs.color }" class="logo">Todo <span v-if="user" class="username"
                @click="toUserProfile">-{{ user.username }}</span>
        </h2>
        <nav class="header-nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/todo">Todos</router-link>
        </nav>
    </header>
</template>

<style scoped>
.logo {
    margin-inline-start: 1rem;
    font-weight: 700;
    color: white;
}

.app-header {
    background-color: black;
    display: flex;
    justify-content: space-between;
}

.header-nav {
    margin-inline-end: 2rem;
    display: flex;
    flex-basis: 200px;
    align-items: center;
    justify-content: space-between;
}

a {
    color: white;
    text-decoration: none;
}

.username {
    font-weight: 200;
    cursor: pointer;
}
</style>