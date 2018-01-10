import React, { PropTypes } from 'react';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ text: nextProps.text });
  }

  onInputChange(e) {
    this.setState({
      text: e.target.value,
    }, () => {
      this.props.editTask(this.state.text, this.props.idx);
    });
  }

  render() {
    return (
      <div className="card todo-item">
        <div className="card-block">
          <textarea
            className="card-block todo-text"
            onChange={(e) => { this.onInputChange(e); }}
            value={this.state.text}
          />
          <i
            className="fa fa-trash-o fa-lg"
            aria-hidden="true"
            onClick={() => { this.props.removeTask(this.props.idx); }}
          />
        </div>
      </div>
    );
  }
}

export default ToDoItem;

ToDoItem.propTypes = {
  text: PropTypes.string,
  idx: PropTypes.number,
  removeTask: PropTypes.func,
  editTask: PropTypes.func,
};
