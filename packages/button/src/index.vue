<template>
  <button class="h-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "h-button"
};
</script>

<style scoped>
.h-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.h-button:focus,
.h-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.h-button:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: none;
}
</style>