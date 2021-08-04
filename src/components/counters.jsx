import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Counter from './counter'

export class Counters extends Component {

    render() {
        return (
            <div className="ml-3 mt-5">
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(counter =>
                    <Counter
                        key={counter.id} counter={counter}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement} />
                    // <h5>Counter #{counter.id}</h5> 
                )}
            </div>
        )
    }
}

export default Counters