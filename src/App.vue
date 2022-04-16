<template>
  <el-config-provider>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </el-config-provider>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
