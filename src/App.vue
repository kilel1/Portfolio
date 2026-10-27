<template>
  <div id="app">
    <!-- Navbar component at top -->
    <Navbar />

    <!-- This tag tells Vue Router where to render HomeView, ContactView, etc. -->
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>