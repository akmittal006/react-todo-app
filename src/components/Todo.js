import React from 'react';
import PropTypes from 'prop-types';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);;
        this.updateStatus = this.updateStatus.bind(this);
    }

    updateStatus(index, status) {
        this.props.onStatusChange(index, status);
    }

    onRemoveClicked = () => {
        this.props.onRemoveTodo(this.props.index);
    }

    render() {
        return (


            (this.props.todo.status === "active") ?
                <div key={this.props.todo.id} className="todo">
                    <div className="todo-main">
                        <input type="checkbox" className="checkbox-round" id={this.props.todo.id} onChange={() => { this.updateStatus(this.props.index, "completed") }} />
                        <label htmlFor={this.props.todo.id + ""}>
                            {this.props.todo.title}
                        </ label >
                    </div>
                    <div className="remove-todo">
                        <a href="#"  onClick={this.onRemoveClicked.bind(this)}>✘</a>
                    </div>
                </div>
                :
                <div key={this.props.todo.id} className="todo">
                    <div className="todo-main">
                        <input type="checkbox" className="checkbox-round" id={this.props.todo.id} checked onChange={() => { this.updateStatus(this.props.index, "active") }} />
                        <label htmlFor={this.props.todo.id + ""}>
                            {this.props.todo.title}
                        </ label >
                    </div>
                    <div className="remove-todo">
                        <a href="#" onClick={this.onRemoveClicked.bind(this)}>✘</a>
                    </div>
                </div>


        );
    }
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onStatusChange: PropTypes.func.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
}