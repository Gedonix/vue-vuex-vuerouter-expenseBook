<template>
  <div>
      <show-header />
      <show-table />
      <choose-page />
  </div>
</template>

<script>
import showHeader from '../components/AppShowHeader.vue'
import showTable from '../components/AppShowTable.vue'
import choosePage from '../components/AppChoosePage.vue'

export default {
  components: {
    showHeader,
    showTable,
    choosePage
  },
  mounted() {
    this.$store.dispatch('download')
  }  
}
</script>