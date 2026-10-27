<template>
  <div id="about" style="padding-top: 120px;">
    <div class="container">
      <div class="about-text">
        <h1 class="sub-title">About</h1>
        <p>
          I'm a passionate web designer with a knack for creating visually appealing and functional websites. With a background in graphic design and a love for coding, I bring a unique blend of creativity and technical skills to every project I undertake.
        </p>
        <p>
          When I'm not designing websites, you can find me exploring the latest design trends, experimenting with new technologies, or enjoying outdoor adventures.
        </p>
        
        <div class="tab-titles">
          <p 
            class="tab-links" 
            :class="{ 'active-link': activeTab === 'skills' }" 
            @click="activeTab = 'skills'"
          >
            Skills
          </p>
          <p 
            class="tab-links" 
            :class="{ 'active-link': activeTab === 'experience' }" 
            @click="activeTab = 'experience'"
          >
            Experience
          </p>
          <p 
            class="tab-links" 
            :class="{ 'active-link': activeTab === 'education' }" 
            @click="activeTab = 'education'"
          >
            Education
          </p>
        </div>

        <div class="tab-contents" :class="{ 'active-tab': activeTab === 'skills' }" id="skills">
          <ul>
            <li><span>UI/UX</span><br>Web Design</li>
            <li><span>Full-Stack Development</span><br>Web app Development</li>
            <li><span>App Development</span><br>Mobile-first approach</li>
          </ul>
        </div>

        <div class="tab-contents" :class="{ 'active-tab': activeTab === 'experience' }" id="experience">
          <ul>
            <li><span>2025 - Current</span><br>Freelance Web Developer</li>
            <li><span>2023 - 2024</span><br>Junior Web Developer</li>
            <li><span>2022 - 2023</span><br>Intern, Marketing Department</li>
          </ul>
        </div>

        <div class="tab-contents" :class="{ 'active-tab': activeTab === 'education' }" id="education">
          <ul>
            <li><span>2020 - 2024</span><br>Bachelor's Degree in Computer Science</li>
            <li><span>2018 - 2020</span><br>Associate Degree in Web Design</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('skills')
</script>

<style scoped>
/* Any view-specific about styles go here */
</style>