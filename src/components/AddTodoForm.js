import React from 'react';
import PropTypes from 'prop-types';

export default class AddTodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
        }
    }

    onTextChange(e) {
        this.setState({
            title: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.title !== "") {
            this.props.onAdd(this.state.title);
        }

        this.setState({
            title: "",
        })
    }

    render() {
        return (
            <form className="add-todo-form" onSubmit={this.onSubmit.bind(this)}>
                <input type="text" placeholder="Enter Todo" value={this.state.title} onChange={this.onTextChange.bind(this)} />
            </form>
        )
    }
}

AddTodoForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
}