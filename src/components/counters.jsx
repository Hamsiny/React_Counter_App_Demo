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

    render() {
        return (
            <div>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id} value={counter.value}>
                        <h5>Counter #{counter.id}</h5>
                    </Counter>)}
            </div>
        )
    }
}

export default Counters