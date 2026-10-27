<template>
  <div id="contact" style="padding-top: 120px;">
    <div class="container">
      <div class="row">
        <div class="contact-left">
          <h1 class="sub-title">Contact Me</h1>
          <p>
            <i class="fas fa-paper-plane"></i> 
            <a href="mailto:bryankilel02@gmail.com" class="contact-link">bryankilel02@gmail.com</a>
          </p>
          <p>
            <i class="fas fa-phone-alt"></i> 
            <a href="tel:+254781771892" class="contact-link">+254 781 771 892</a>
          </p>
          <div class="social-icons">
            <a href="https://github.com/kilel1" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/brian-kibet-3858a9305/" target="_blank"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div class="contact-right">
          <form @submit.prevent="handleSubmit">
            <input type="text" name="Name" placeholder="Your Name" required>
            <input type="email" name="Email" placeholder="Your Email" required>
            <textarea name="Message" rows="6" placeholder="Your Message" required></textarea>
            <button type="submit" class="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleSubmit = () => {
  // Handle form submission logic here later if needed
  alert('Message sent!')
}
</script>

<style scoped>
/* Add any view-specific contact styles here if needed */
</style>