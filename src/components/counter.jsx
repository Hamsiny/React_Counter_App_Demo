import React, { Component } from 'react'

export class Counter extends Component {

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }


    // bind 'this' by using constructor
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }


    render() {
        // in onclick event use arrow function to parse in parameter
        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    {/* {this.props.children} pass children to this components*/}
                    <button onClick={() => this.props.onDecrement(this.props.counter)}
                        className='btn btn-secondary btn-sm m-2' 
                        disabled={this.props.counter.value === 0 ? true : false}>-</button>
                    <button onClick={() => this.props.onIncrement(this.props.counter)}
                        className='btn btn-secondary btn-sm m-2'>+</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)}
                        className="btn btn-danger btn-sm m-2">Delete</button>
                </div>

            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 ';
        classes += (this.props.counter.value === 0) ? 'badge-warning' : 'badge-primary';
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter
