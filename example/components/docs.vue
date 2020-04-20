<template>
  <!-- <keep-alive> -->
  <component :is="curComp"></component>
  <!-- </keep-alive> -->
</template>

<script>
const titleMd = () => import(/* webpackChunkName: 'titleMd' */"../docs/basic/title.md");
const buttonMd = () => import("../docs/basic/button.md");
const introMd = () => import("../docs/guide/intro.md");
export default {
  data() {
    return {
      curComp: "introMd"
    };
  },
  components: {
    titleMd,
    buttonMd,
    introMd
  },
  methods: {
    changeComp() {
      const {
        params: { compName }
      } = this.$route;
      this.curComp = compName ? compName + "Md" : "introMd";
    }
  },
  watch: {
    $route() {
      this.changeComp()
    }
  },
  created() {
    this.changeComp()
  }
};
</script>

<style>
</style>