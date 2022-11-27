import React from "react";
import { toast } from 'react-toastify';
class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    addNewTodo = () => {
        if (!this.state.title) {
            toast.error('missing title!')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addTodo(todo)
        this.setState({
            title: ''
        })
        toast.success("Wow so easy!");
    }
    render() {
        let { title } = this.state
        return (
            <>
                <div className="add-todo">
                    <input type="text" value={title}
                        onChange={(event) => this.handleChangeTitle(event)}
                    />
                    <button type="button" onClick={() => this.addNewTodo()} >Add</button>
                </div>
            </>
        )
    }
}

export default AddTodo;