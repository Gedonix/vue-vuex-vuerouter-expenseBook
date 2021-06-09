<template>
  <div class="container">
    <the-navbar />    
    <router-view/>
  </div>  
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'

export default ({
  components: {
    TheNavbar,
      
  },
})

</script>
