<template>
  <div>
    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/newleitors">Novo Leitor</router-link>
    </div>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
