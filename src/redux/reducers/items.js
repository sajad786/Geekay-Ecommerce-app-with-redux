import types from "../types";
const initialState = {
  listData: [],
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
        console.log(action.payload,'reducerrrrrrrrr');
      return {
        ...state,
        listData: [...state.listData, action.payload],
      };
    case types.DELETE_ITEM:
      // console.log('item to delete in reducer outside map', action.payload);
      const filteredList = state.listData.filter(
        item => item.id !== action.payload,
      );
      return {
        ...state,
        listData: filteredList,
      };
    case types.EDIT_ITEM:
      const {itemId, itemValue} = action.payload;
      const editedList = state.listData.map(list => {
        if (list.itemToAdd.id == itemId) {
          list.itemToAdd.item = itemValue;
        }
        return list;
      });
      return {
        ...state,
        listData: editedList,
      };
    default:
      return {...state};
  }
};
