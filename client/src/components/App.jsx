import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import TodoItem from './TodoItem.jsx';
import Alert from './Alert.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
  }

  componentWillMount() {
    this.props.fetchList();
  }

  onSave() {
    const list = this.props.todoList.tasks;
    const data = {};
    if (this.props.todoList.changed) {
      for (let i = 0; i < list.length; i++) {
        data[i] = list[i];
      }
      this.props.postList(data);
    }
  }

  render() {
    return (
      <div id="todo-list">
        <header>
        </header>
        <div className="container">
          <div className="row top-line align-items-center">
            <div className="col">
              <h1>Tasks</h1>
            </div>
            <div className="col">
              {this.props.todoList.changed ?
                <button
                  className="btn btn-success pull-right"
                  onClick={this.onSave}
                >
                  Save
                </button> :
                <button
                  className="btn btn-success pull-right"
                  onClick={this.onSave}
                  disabled
                >
                  Save
                </button>
              }
              <button
                className="btn btn-secondary pull-right"
                onClick={this.props.addTask}
              >
                Add Task
              </button>
            </div>
          </div>
          <div>
            {this.props.todoList.tasks ?
              this.props.todoList.tasks.map((item, idx) =>
                <TodoItem
                  text={item}
                  idx={idx}
                  key={idx}
                  removeTask={this.props.removeTask}
                  editTask={this.props.editTask}
                />
              ) : null
            }
          </div>
          {this.props.todoList.message ?
            <Alert
              message={this.props.todoList.message.text}
              type={this.props.todoList.message.status}
              dismissMessage={this.props.dismissMessage}
            /> :
            null
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.todoList,
  };
}

App.propTypes = {
  fetchList: PropTypes.func,
  postList: PropTypes.func,
  addTask: PropTypes.func,
  removeTask: PropTypes.func,
  editTask: PropTypes.func,
  todoList: PropTypes.array,
  dismissMessage: PropTypes.func,
};

export default connect(mapStateToProps, actions)(App);

