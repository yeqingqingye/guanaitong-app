<template>

  <div class="device">

    {{obj}}

  </div>

</template>

<script>
  export default {
    name: "device",
    data() {
      return {obj: {}}
    },
    created() {

      let _this = this;
      eventBus.$on('eventBusName', function (val) {
        _this.obj = val;
      })
    }
  }

</script>

<style scoped></style>
