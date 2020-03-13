<template>
  <header class="navbar bg-white">
    <div class="container">
      <router-link tag="a" class="logo" to="/">
        <img src alt />
        <span>hView</span>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.navbar {
  height: 3.6rem;
  box-sizing: border-box;
  padding: 0.8rem 0;
  line-height: 2rem;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  /* transition: background-color 0.3s ease-in-out; */
}
.navbar .container {
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
}
.logo {
  display: inline-block;
  color: #273849;
  font-size: 1.5em;
  font-weight: 600;
}
</style>