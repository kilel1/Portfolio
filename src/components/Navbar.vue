<template>
  <nav>
    <router-link to="/" class="logo">
      <img src="../images/c.png" alt="Brian Logo">
    </router-link>
    
    <!-- Mobile menu toggle button -->
    <div 
      class="menu-toggle" 
      id="mobile-menu" 
      :class="{ 'is-active': isMenuOpen }" 
      @click="toggleMenu"
    >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>

    <!-- Navigation Links -->
    <ul class="nav-links" :class="{ 'active': isMenuOpen }">
      <li><router-link to="/" @click="closeMenu">Home</router-link></li>
      <li><router-link to="/about" @click="closeMenu">About</router-link></li>
      <li><router-link to="/projects" @click="closeMenu">Projects</router-link></li>
      <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
/* Ensure your navbar styles in style.css or here handle .nav-links.active and .menu-toggle.is-active */
</style>