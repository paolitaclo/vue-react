<template>
  <div
    class="digit-box"
    :class="styledBox"
    @click="onSelectDigit(digitNumber)"
  >
    {{digitNumber}}
  </div>
</template>

<script>
  export default {
    name: "index",
    props: {
      digitNumber: {
        type: String,
        required: true
      },
      styledBox: {
        type: String,
        required: false
      }
    },
    methods: {
      onSelectDigit(value) {
        this.$emit('onSelectDigit', value);
      }
    }
  }
</script>

<style scoped>
  .digit-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    font-size: 50px;
    border: 2px solid red;
    background-color: coral;
  }

  .operator {
    background-color: aliceblue;
  }
</style>
