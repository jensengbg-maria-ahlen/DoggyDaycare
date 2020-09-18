<template>
    <main id="app">
        <nav>
            <router-link to="/">Home</router-link>  |  
            <router-link to="/dogs">Our Dogs</router-link>
        </nav>
        <router-view />
    </main>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

body {
    background: #eee;
    font-family: 'Open Sans', sans-serif;

    #app {
        max-width: 1000px;
        margin: 1rem auto;
    }
}
</style>