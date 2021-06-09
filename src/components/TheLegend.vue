<template>
  <div class="menu_wrapper">
      <div class="menu_item" @click="$router.push('/read')"> 
        <i class="fas fa-book"></i>
        <span>Посмотреть всю книгу</span>
      </div>
      <div class="menu_item" @click="$router.push('/write')"> 
        <i class="fas fa-pencil-alt"></i>
        <span>Добавить записи</span>
      </div>
      <div class="menu_item" @click="$router.push('/edit')">
        <i class="fas fa-hammer"></i>
        <span>Настроить категории</span>
      </div>
      <div class="menu_item" @click="$router.push('/about')">
        <i class="fab fa-angellist"></i> 
        <span>О проекте</span>
      </div>
      <div class="menu_item">
        <i class="fas fa-home"></i> 
        <span>Эта страница</span>
      </div>
  </div>
</template>
