import React, { Component } from 'react';
import DigitBox from '../DigitBox';
import './index.css';

export default class DigitsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: ''
        };
    }

    onChangeDisplay = event => {
        this.setState({ display: event.target.value });
    };

    reset = () => {
        this.setState({ display: '' });
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
                            <DigitBox className="operator" digitNumnber={'C'} onSelectDigit={this.onClick} />
                            <DigitBox className="operator" digitNumnber={'CE'} onSelectDigit={this.onClick} />
                            <DigitBox className="operator" digitNumnber={'/'} onSelectDigit={this.onClick} />
                        </div>
                        <div className="digits-row">
                            <DigitBox digitNumnber={7} onSelectDigit={this.onClick} />
                            <DigitBox digitNumnber={8} onSelectDigit={this.onClick} />
                            <DigitBox digitNumnber={9} onSelectDigit={this.onClick} />
                        </div>
                        <div className="digits-row">
                            <DigitBox digitNumnber={4} onSelectDigit={this.onClick} />
                            <DigitBox digitNumnber={5} onSelectDigit={this.onClick} />
                            <DigitBox digitNumnber={6} onSelectDigit={this.onClick} />
                        </div>
                        <div className="digits-row">
                            <DigitBox digitNumnber={1} onSelectDigit={this.onClick} />
                            <DigitBox digitNumnber={2} onSelectDigit={this.onClick} />
                            <DigitBox digitNumnber={3} onSelectDigit={this.onClick} />
                        </div>
                        <div className="digits-row">
                            <DigitBox
                                className="streched"
                                digitNumnber={0}
                                onSelectDigit={this.onClick}
                            />
                            <DigitBox digitNumnber={'.'} onSelectDigit={this.onClick} />
                        </div>
                    </div>
                    <div className="operations-container">
                        <DigitBox className="operator" digitNumnber={'*'} onSelectDigit={this.onClick} />
                        <DigitBox className="operator" digitNumnber={'+'} onSelectDigit={this.onClick} />
                        <DigitBox className="operator" digitNumnber={'-'} onSelectDigit={this.onClick} />
                        <DigitBox
                            className="streched operator"
                            digitNumnber={'='}
                            onSelectDigit={this.onClick}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
