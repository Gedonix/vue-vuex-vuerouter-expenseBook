<template>
  <h2>Редактировать список категорий</h2>
  <div class="wrapper">
      <div class="left">
          <p>Добавить новую категорию:</p>
          <div class="input">
              <input type="text" name="cat" v-model="newCategory">
              <i class="fas fa-caret-square-right" @click="addCategory"></i>              
          </div>          
      </div>
      <div class="right">
          <div class="category"
          v-for="(category, idx) in categories"
          :key="category"
          > 
          <p>{{ category }}</p>
          <p><i class="fas fa-trash-alt" @click="delCategory(idx)"></i></p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            newCategory: ''
        }
    },
    methods: {
        addCategory() {
            this.$store.commit({
                type: 'addCategory',
                category: this.newCategory
            })            
        },
        delCategory(idx) {
            this.$store.commit({
                type: 'delCategory',
                idx
            })            
        }
    },
    computed: {
        categories() {
            return this.$store.getters.categories
        }
    }
}
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .left {
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .left p {
        margin-top: 5px;
        padding-top: 10px;
    }
    .left input {
        margin: 20px 0 20px 0;
        width: 250px;
        height: 24px;
    }
    .right {
        padding-left: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
    }
    .input {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .input i {
        margin-left: 5px;
        font-size: 28px;
    }
    .category {
        margin: 5px;
        padding: 10px;
        width: 280px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>