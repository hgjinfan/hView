<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h-header :title="'我是头部'"></h-header>
    <main class="content">
      <h-nav></h-nav>
      <section class="guide bg-white">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </section>
    </main>
  </div>
</template>

<script>
import hNav from "./components/hNav";
import hHeader from "./components/hHeader";
export default {
  name: "App",
  components: {
    hNav,
    hHeader
  },
  methods: {
  }
};
</script>

<style>
@import url("./assets/common.css");
@import url("./assets/color-brewer.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  overflow-y: hidden;
}
.content {
  max-width: 960px;
  margin: 40px auto;
}
.guide {
  margin-left: 18rem;
  border-radius: 3px;
  padding: 20px;
  transition: height ease 0.3s;
}
.guide h2 {
  font-size: 28px;
  color: #1f2d3d;
  margin: 0;
}

.guide h3 {
  font-size: 22px;
}
.guide h2,
.guide h3,
.guide h4,
.guide h5 {
  font-weight: 400;
  color: #1f2f3d;
}
.guide p {
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.nva-item {
  font-size: 16px;
  font-weight: 400;
  color: #444;
}
.router-link-exact-active {
  color: #409eff;
}
</style>
