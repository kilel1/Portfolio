<template>
  <div id="app">
    <Navbar />
    <!-- router-view is the placeholder where Home, About, Projects, Contact render -->
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>