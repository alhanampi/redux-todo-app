import { SET_FILTER } from "../actionsTypes";
import { TODOS_FILTER } from "../../utils/contants";

const initialState = TODOS_FILTER.ALL;

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      const { filter } = action.payload;
      return filter;
    }

    default: {
      return state;
    }
  }
};

export default visibilityFilter;
