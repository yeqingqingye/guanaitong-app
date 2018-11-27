<template>
  <div class="header">
    <div class="logo"></div>
    <ul class="menu flex">
      <li class="menu-item">nav 1</li>
      <li class="menu-item active">nav 2</li>
      <li class="menu-item">nav 3</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'm-header'
  }
</script>

<style scoped lang="less">

  .header {
    background: #001529;
    padding: 0 50px;
    height: 64px;
    line-height: 64px;
    flex: 0 0 auto;
    .menu {
      .menu-item {
        color: rgba(255, 255, 255, 0.65);
        cursor: pointer;
        margin: 0;
        padding: 0 20px;
        &.active {
          background-color: #1890ff;
          color: #ffffff;
        }
      }
    }
  }


</style>
