import { nanoid } from 'nanoid';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/persons'

class Person extends Component {
    addPerson = () => {
        this.props.addPerson({id: nanoid() ,name: this.nameInput.current.value, age: this.ageInput.current.value});
        this.nameInput.current.value = '';
        this.ageInput.current.value = '';
    }

    nameInput = React.createRef();
    ageInput = React.createRef();

    render() {
        const {persons, sum} = this.props;
        return (
            <div>
                <h1>This is the Person Component</h1>
                <h4>Number of persons is {persons.length}</h4>
                <ul>
                    {persons.map(person => (<li key={person.id}>{person.name}---{person.age}</li>))}
                </ul>
                <input type="text" placeholder='name' ref={this.nameInput}/>&nbsp;
                <input type="text" placeholder='age' ref={this.ageInput}/>&nbsp;
                <button onClick={this.addPerson}>add a person</button>
                <div><br/>The Sum in Calculator Component is {sum}</div>
            </div>
        )
    }
}

export default connect(
    state => ({persons: state.persons, sum: state.sum}),
    {addPerson}
)(Person);
