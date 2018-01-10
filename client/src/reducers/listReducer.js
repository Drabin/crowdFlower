import {
  TODO_LIST,
  FETCH_MESSAGE,
  ADD_TASK,
  REMOVE_TASK,
  EDIT_TASK,
  DISMISS_MESSAGE,
} from '../actions/types.js';

function formatData(data) {
  const formatedData = [];
  if (data) {
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      formatedData.push(data[i]);
    }
  }
  return formatedData;
}

function updateList(arr, text, idx) {
  return arr.map((item, i) => {
    if (i === idx) {
      return text;
    }
    return item;
  });
}


export default function (state = {}, action) {
  switch (action.type) {
    case TODO_LIST:
      return { ...state, tasks: formatData(action.payload.tasks), changed: false };
    case FETCH_MESSAGE:
      return { ...state, message: {
        ...state.message,
        text: action.text,
        status: action.status,
      } };
    case ADD_TASK:
      return { ...state, tasks: [action.payload, ...state.tasks], changed: true };
    case DISMISS_MESSAGE:
      return { ...state, message: null };
    case REMOVE_TASK:
      return { ...state, tasks: [
        ...state.tasks.slice(0, action.payload),
        ...state.tasks.slice(action.payload + 1),
      ], changed: true };
    case EDIT_TASK:
      return { ...state,
        tasks: updateList(state.tasks, action.text, action.idx),
        changed: true };
    default:
      return state;
  }
}
