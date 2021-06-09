<template>
  <div>
      <new-expense />
      <show-table />
      <choose-page />
  </div>
</template>

<script>
import newExpense from '../components/AppNewExpense.vue'
import showTable from '../components/AppShowTable.vue'
import choosePage from '../components/AppChoosePage.vue'

export default {
  components: {
    newExpense,
    showTable,
    choosePage
  }
}
</script>
