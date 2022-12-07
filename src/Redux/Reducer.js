import {DOWNLOADFIRST, DOWNLOADTHIRD, DOWNLOADSECOND} from './Constant';

const initialState = {
  DOWNLOADFIRST: '0',
  DOWNLOADSECOND: '0',
  DOWNLOADTHIRD: '0',
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOADFIRST:
      return {
        ...state,
        DOWNLOADFIRST: action.payload,
      };
    case DOWNLOADSECOND:
      return {
        ...state,
        DOWNLOADSECOND: action.payload,
      };
    case DOWNLOADTHIRD:
      return {
        ...state,
        DOWNLOADTHIRD: action.payload,
      };
    default:
      return state;
  }
};
export default countReducer;
