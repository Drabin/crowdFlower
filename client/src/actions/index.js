import axios from 'axios';

import {
  TODO_LIST,
  FETCH_MESSAGE,
  ADD_TASK,
  REMOVE_TASK,
  EDIT_TASK,
  DISMISS_MESSAGE,
} from './types.js';

const API_URL = 'http://cfassignment.herokuapp.com/daniel/tasks';

export function fetchMessage(status, text) {
  // returns response message
  return {
    type: FETCH_MESSAGE,
    status,
    text,
  };
}

export function dismissMessage() {
  return (dispatch) => {
    dispatch({
      type: DISMISS_MESSAGE,
    });
  };
}

export function fetchList() {
  return (dispatch) => {
    axios.get(API_URL)
      .then((response) => {
        dispatch({
          type: TODO_LIST,
          payload: response.data,
        });
      })
      .catch(() => {
        dispatch(fetchMessage('danger', 'Oops unable to load list'));
      });
  };
}

export function postList(list) {
  return (dispatch) => {
    axios.post(API_URL, {
      tasks: list,
    })
    .then(() => {
      dispatch(fetchMessage('success', 'Tasks saved successfully'));
    })
    .catch(() => {
      dispatch(fetchMessage('danger', 'Oops unable to save list, please try again'));
    });
  };
}

export function addTask() {
  return (dispatch) => {
    dispatch({
      type: ADD_TASK,
      payload: '',
    });
  };
}

export function removeTask(idx) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_TASK,
      payload: idx,
    });
  };
}

export function editTask(text, idx) {
  return (dispatch) => {
    dispatch({
      type: EDIT_TASK,
      text,
      idx,
    });
  };
}

