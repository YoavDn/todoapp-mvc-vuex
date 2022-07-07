<template>
    <header class="app-header">
        <h2 class="logo">Todo</h2>
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
    margin-inline-end: 1rem;
    display: flex;
    flex-basis: 30%;
    align-items: center;
    justify-content: space-between;
}

a {
    color: white;
    text-decoration: none;
}
</style>