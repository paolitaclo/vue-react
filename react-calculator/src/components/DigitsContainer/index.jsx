import React, {Component} from 'react';
import DigitBox from '../DigitBox';
import './index.css';

export default class DigitsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    };
  }

  reset = () => {
    this.setState({display: ''});
  };

  backspace = () => {
    this.setState({
      display: this.state.display.slice(0, -1)
    });
  };

  calculate = () => {
    this.setState({
      display: (eval(this.state.display) || '') + ''
    });
  };

  onClick = button => {
    if (button === '=') {
      this.calculate();
    } else if (button === 'C') {
      this.reset();
    } else if (button === 'CE') {
      this.backspace();
    } else {
      this.setState({
        display: this.state.display + button
      });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display-container">
          <h2 className="display-text">{this.state.display}</h2>
        </div>
        <div className="secondary-row-container">
          <div className="digits-container">
            <div className="digits-row">
              <DigitBox styledBox="operator" digitNumber={'C'} onSelectDigit={this.onClick}/>
              <DigitBox styledBox="operator" digitNumber={'CE'} onSelectDigit={this.onClick}/>
              <DigitBox styledBox="operator" digitNumber={'/'} onSelectDigit={this.onClick}/>
            </div>
            <div className="digits-row">
              <DigitBox digitNumber={7} onSelectDigit={this.onClick}/>
              <DigitBox digitNumber={8} onSelectDigit={this.onClick}/>
              <DigitBox digitNumber={9} onSelectDigit={this.onClick}/>
            </div>
            <div className="digits-row">
              <DigitBox digitNumber={4} onSelectDigit={this.onClick}/>
              <DigitBox digitNumber={5} onSelectDigit={this.onClick}/>
              <DigitBox digitNumber={6} onSelectDigit={this.onClick}/>
            </div>
            <div className="digits-row">
              <DigitBox digitNumber={1} onSelectDigit={this.onClick}/>
              <DigitBox digitNumber={2} onSelectDigit={this.onClick}/>
              <DigitBox digitNumber={3} onSelectDigit={this.onClick}/>
            </div>
            <div className="digits-row">
              <DigitBox
                styledBox="stretched"
                digitNumber={0}
                onSelectDigit={this.onClick}
              />
              <DigitBox digitNumber={'.'} onSelectDigit={this.onClick}/>
            </div>
          </div>
          <div className="operations-container">
            <DigitBox styledBox="operator" digitNumber={'*'} onSelectDigit={this.onClick}/>
            <DigitBox styledBox="operator" digitNumber={'+'} onSelectDigit={this.onClick}/>
            <DigitBox styledBox="operator" digitNumber={'-'} onSelectDigit={this.onClick}/>
            <DigitBox
              styledBox="stretched operator"
              digitNumber={'='}
              onSelectDigit={this.onClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
