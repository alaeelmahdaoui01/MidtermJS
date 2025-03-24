<template>
  <nav>
    <router-link to="/" class="home">Home</router-link> 
  </nav>
  <h1> Gestion de bibliothèque universitaire </h1>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #921d08;
}

.home{
  color : rgb(8, 8, 83);
  font-size : 20px;
}
</style>
