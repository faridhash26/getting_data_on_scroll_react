import {
  REQUEST_CARD,
  SUCCESS_CARD,
  FAIL_CARD,
} from "../constants/cardConstant";
import { inintState } from "../initiastate";

export const cardReducer = (state = inintState, action) => {
  switch (action.type) {
    case REQUEST_CARD:
      return {
        ...state,
        loadig: true,
      };
    case SUCCESS_CARD:
      return {
        ...state,
        loading: false,
        item: [...state.item, ...action.payload],
      };

    case FAIL_CARD:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
