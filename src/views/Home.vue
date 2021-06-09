<template>
  <the-header />
  <the-legend />  
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheLegend from '../components/TheLegend.vue'

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheLegend
  }
}
</script>
