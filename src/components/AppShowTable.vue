<template>
  <div class="list_wrapper">
    <div class="list_header">
      <div class="list_cell_1">#</div>
      <div class="list_cell_2">Дата</div>
      <div class="list_cell_3">Категория</div>
      <div class="list_cell_4">Платеж</div>
    </div>
    <div class="list_table"
      v-for="cell in list"
      :key=cell.id
    >
      <div class="cell list_cell_1">{{cell.id}}</div>
      <div class="cell list_cell_2">{{cell.date}}</div>
      <div class="cell list_cell_3">{{cell.category}}</div>
      <div class="cell list_cell_4">{{cell.value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  
  computed:{
    list(){
      return this.$store.getters.viewRecords
    }
  }
}
</script>
