<template>
  <div id="app">
    <DigitContainer/>
  </div>
</template>

<script>
import DigitContainer from './components/DigitsContainer'

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
