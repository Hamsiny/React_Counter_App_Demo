import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Counter from './counter'

export class Counters extends Component {

    render() {
        const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props;

        return (
            <div className="ml-3 mt-5">
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter =>
                    <Counter
                        key={counter.id} counter={counter}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement} />
                    // <h5>Counter #{counter.id}</h5> 
                )}
            </div>
        )
    }
}

export default Counters