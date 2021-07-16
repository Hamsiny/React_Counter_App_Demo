import React, { Component } from 'react'

export class Counter extends Component {
    state = {
        value: this.props.value
    };

    // bind this by using constructor
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    }

    handleDecrement = () => {
        this.setState(() => this.state.value -= 1);
    }

    render() {
        // in onclick event use arrow function to parse in parameter
        return (
            <div>
                {this.props.children}
                <button onClick={this.handleDecrement} className='btn btn-secondary btn-sm'>Decrement</button>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 ';
        classes += (this.state.value === 0) ? 'badge-warning' : 'badge-primary';
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter
