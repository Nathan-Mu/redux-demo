import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment, decrement, incrementAsync} from '../../redux/actions/sum'

class Calculator extends Component {
    selectRef = React.createRef();

    increment = () => {
        this.props.increment(this.getSelect());
    }

    decrement = () => {
        this.props.decrement(this.getSelect());
    }

    incrementIfOdd = () => {
        if (this.props.sum % 2 !== 0)
            this.increment();
    }

    incrementAsync = () => {
        this.props.incrementAsync(this.getSelect(), 500)
    }

    getSelect = () => this.selectRef.current.value * 1

    render() {
        const {sum, personNumber} = this.props;
        return (
            <div>
                <h1>This is the Calculator Component</h1>
                <h4>Sum is {sum}</h4>
                <select ref={this.selectRef}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>increment</button>&nbsp;
                <button onClick={this.decrement}>decrement</button>&nbsp;
                <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                <button onClick={this.incrementAsync}>increment after 500ms (async)</button>
                <div><br/>Number of persons in the Person Component is {personNumber}</div>
            </div>
        )
    }
}

export default connect(
    state => ({sum: state.sum, personNumber: state.persons.length}),
    {increment, decrement, incrementAsync}
)(Calculator);
