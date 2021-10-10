import { SET_LOADİNG, SET_SINGLE_SHOW, CLEAR_SINGLE_SHOW } from "../types";

const showsReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADİNG:
      return {
        ...state,
        shows: action.payload,
        loading: true,
      };

    case SET_SINGLE_SHOW:
      return {
        ...state,
        singleShow: action.payload,
        loading: false,
      };

    case CLEAR_SINGLE_SHOW:
      return {
        ...state,
        singleShow: {},
      };

    default:
      return state;
  }
};
export default showsReducer;
