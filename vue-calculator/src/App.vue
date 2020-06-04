<template>
  <div id="app">
    <DigitContainer/>
  </div>
</template>

<script>
import DigitContainer from './components/DigitContainer/index'

export default {
  name: 'App',
  components: {
    DigitContainer
  }
}
</script>

<style>
#app {
  text-align: center;
  display: flex;
  justify-content: center;
}
</style>
