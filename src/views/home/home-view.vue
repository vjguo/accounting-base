<template>
  <div class="home-view">
    <el-space wrap :size="50" class="home-view__menu">
      <el-button round class="home-view__menu-item">账本管理</el-button>
      <el-button round class="home-view__menu-item">账户管理</el-button>
      <el-button round class="home-view__menu-item">货币管理</el-button>
    </el-space>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home-view {
  &__menu {
    display: flex;
    padding: 50px 0 0 50px;
    flex-wrap: wrap;
  }

  &__menu-item {
    display: flex;
    width: 208px;
    height: 186px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
