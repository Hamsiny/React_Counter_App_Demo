import React, { Component } from 'react'

export class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    // bind this by using constructor
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

    handleDecrement = () => {
        this.setState(() => this.state.count -= 1);
    }

    render() {
        // in onclick event use arrow function to parse in parameter
        return (
            <div>
                <button onClick={this.handleDecrement} className='btn btn-secondary btn-sm'>Decrement</button>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 ';
        classes += (this.state.count === 0) ? 'badge-warning' : 'badge-primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter
