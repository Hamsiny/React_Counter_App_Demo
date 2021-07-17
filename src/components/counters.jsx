import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Counter from './counter'

export class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 2 },
            { id: 3, value: 3 },
            { id: 4, value: 4 }
        ]
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value -=1;
        this.setState({counters});
    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({ counters }); // same with this.setState({counters: counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({ counters });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id} counter={counter} 
                        onDelete={this.handleDelete} 
                        onIncrement={this.handleIncrement} 
                        onDecrement={this.handleDecrement}/>
                    // <h5>Counter #{counter.id}</h5> 
                )}
            </div>
        )
    }
}

export default Counters