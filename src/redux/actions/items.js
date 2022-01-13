import store from "../store"
import types from "../types";


const { dispatch } = store;

export const addItem = item => {
  console.log('dispatched add item>>>>', item);
  dispatch({
    type: types.ADD_ITEM,
    payload: item,
  });
};

export const deleteItem = id => {
  dispatch({
    type: types.DELETE_ITEM,
    payload: id,
  });
};

export const editItem = (itemId, itemValue) => {
  dispatch({
    type: types.EDIT_ITEM,
    payload: {itemId, itemValue},
  });
};