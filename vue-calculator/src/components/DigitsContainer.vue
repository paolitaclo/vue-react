<template>
  <div class="calculator">
    <div class="display-container">
      <h2 class="display-text">{{display}}</h2>
    </div>
    <div class="secondary-row-container">
      <div class="digits-container">
        <div class="digits-row">
          <DigitBox styledBox="operator" digitNumber="C" @onSelectDigit="onClick"/>
          <DigitBox styledBox="operator" digitNumber="CE" @onSelectDigit="onClick"/>
          <DigitBox styledBox="operator" digitNumber="/" @onSelectDigit="onClick"/>
        </div>
        <div class="digits-row">
          <DigitBox digitNumber="7" @onSelectDigit="onClick"/>
          <DigitBox digitNumber="8" @onSelectDigit="onClick"/>
          <DigitBox digitNumber="9" @onSelectDigit="onClick"/>
        </div>
        <div class="digits-row">
          <DigitBox digitNumber="4" @onSelectDigit="onClick"/>
          <DigitBox digitNumber="5" @onSelectDigit="onClick"/>
          <DigitBox digitNumber="6" @onSelectDigit="onClick"/>
        </div>
        <div class="digits-row">
          <DigitBox digitNumber="1" @onSelectDigit="onClick"/>
          <DigitBox digitNumber="2" @onSelectDigit="onClick"/>
          <DigitBox digitNumber="3" @onSelectDigit="onClick"/>
        </div>
        <div class="digits-row">
          <DigitBox class="stretched" digitNumber="0" @onSelectDigit="onClick"/>
          <DigitBox digitNumber="." @onSelectDigit="onClick"/>
        </div>
      </div>
      <div class="operations-container">
        <DigitBox styledBox="operator" digitNumber="*" @onSelectDigit="onClick"/>
        <DigitBox styledBox="operator" digitNumber="+" @onSelectDigit="onClick"/>
        <DigitBox styledBox="operator" digitNumber="-" @onSelectDigit="onClick"/>
        <DigitBox styledBox="stretched operator" digitNumber="=" @onSelectDigit="onClick"/>
      </div>
    </div>
  </div>
</template>

<script>
  import DigitBox from './DigitBox';

  export default {
    components: { DigitBox },
    data() {
      return {
        display: ''
      }
    },
    methods: {
      backspace() {
        this.display = this.display.slice(0, -1);
      },
      calculate() {
        this.display = eval(this.display || '') + ''
      },
      reset() {
        this.display = '';
      },
      onClick(button) {
        switch (button) {
          case '=':
            this.calculate();
            break;
          case 'C':
            this.reset();
            break;
          case 'CE':
            this.backspace();
            break;
          default:
            this.display += button;
        }
      }
    }
  };
</script>

<style scoped>
  .digits-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .digits-row {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .display-container {
    background-color: darkgrey;
    height: 100px;
  }

  .calculator {
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 416px;
    justify-content: center;
  }

  .display-text {
    color: black;
  }

  .secondary-row-container {
    display: flex;
    flex-direction: row;
  }

  .operations-container {
    display: flex;
    flex-direction: column;
  }

  .stretched {
    flex-grow: 2;
  }
</style>
