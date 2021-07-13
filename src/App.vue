<template>
  <div>
    <div class="menu">
      <router-link to="/">Home</router-link>
      &nbsp;&nbsp;
      <router-link to="/newleitors">Novo Leitor</router-link>
    </div>
    <hr/>
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
