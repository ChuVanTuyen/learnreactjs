import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddTodo from "./AddTodo";

class ListTodo extends React.Component {

  state = {
    listTodo: [
      { id: 'ahfsdk', title: 'Doing homework1' },
      { id: 'ahfsdk1', title: 'Doing homework2' },
      { id: 'ahfsdk2', title: 'Doing homework3' },
    ],
    editTodo: {}
  }
  addTodo = (data) => {
    this.setState({
      listTodo: [...this.state.listTodo, data]
    })
  }
  deleteTodo = (todo) => {
    let currentTodos = this.state.listTodo;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id)
    this.setState({
      listTodo: currentTodos
    })
    toast.success('Delete succeed!');
  }
  handleEditTodo = (todo) => {
    this.setState({
      editTodo: todo
    })
  }
  handleChangeTodo = (event) => {
    let changeTodo = { ...this.state.editTodo };
    changeTodo.title = event.target.value;
    this.setState({
      editTodo: changeTodo
    })
  }
  saveTodo = () => {
    let copyListTodo = [...this.state.listTodo];
    let copyEditTodo = this.state.editTodo;
    let todoIndex = copyListTodo.findIndex(item => item.id === copyEditTodo.id);
    copyListTodo[todoIndex].title = copyEditTodo.title;
    this.setState({
      listTodo: copyListTodo,
      editTodo: {}
    })
  }
  render() {
    let { listTodo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    return (
      <>
        <div className="list-todo-container">
          <AddTodo
            addTodo={this.addTodo}
          />

          <div className="list-todo-content">
            {listTodo && listTodo.length > 0 &&
              listTodo.map((item, index) => {
                return (
                  <div key={item.id} className="Todo-child">
                    {!isEmptyObj && item.id === editTodo.id ?
                      <>
                        <span>
                          {index + 1}.
                          <input
                            value={editTodo.title}
                            onChange={(event) => this.handleChangeTodo(event)}
                          />
                        </span>
                        <button onClick={() => this.saveTodo()}>Save</button>
                      </>
                      :
                      <>
                        <span>{index + 1}. {item.title}</span>
                        <button onClick={() => this.handleEditTodo(item)}>Edit</button>
                      </>
                    }
                    &nbsp;<button onClick={() => this.deleteTodo(item)}>Delete</button>
                  </div>
                )
              })
            }
          </div>
        </div>
        <ToastContainer />
      </>
    )

  }
}

export default ListTodo;