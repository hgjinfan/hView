<template>
  <div class="demo-block">
    <slot name="source"></slot>
    <div class="code-wrapper" ref="code" :style="{height: height  +'px'}">
      <slot name="highlight"></slot>
    </div>
    <div class="demo-block-control" v-text="open?'隐藏代码':'显示代码'" @click="open = !open"></div>
  </div>
</template>

<script>
export default {
  name: "demo-block",
  data() {
    return {
      open: false
    };
  },
  computed: {
    height() {
      return this.open ? this.$refs.code.firstChild.offsetHeight : 0;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.demo-block {
  border: 1px solid #eaeefb;
  border-radius: 3px;
  transition: 0.2s;
}
.code-wrapper {
  transition: height ease 0.3s;
  overflow: hidden;
  background-color: #fafafa;
}
.demo-block .source {
  padding: 24px;
}
.demo-block .code {
  border-top: 1px solid #eaeefb;
  padding: 18px 24px;
}
.demo-block-control {
  border-top: 1px solid #eaeefb;
  text-align: center;
  cursor: pointer;
  padding: 5px 0;
  font-size: 14px;
  color: #d3dce6;
}
.demo-block-control:hover {
    color: #409eff;
}
</style>