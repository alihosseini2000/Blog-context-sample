import { actionType } from "../utils/constant";

export const commentReducer = (state, action) => {
  switch (action.type) {
    case actionType.GET_COMMENTS_BY_POST_BEGIN:
      return {
        ...state,
        commentsByPostLoading: true,
      };
    case actionType.GET_COMMENTS_BY_POST_ERROR:
      return {
        ...state,
        commentsByPostLoading: false,
        commentsByPostError: true
      };
    case actionType.GET_COMMENTS_BY_POST_SUCCESS:
      return {
        ...state,
        commentsByPostLoading: false,
        commentsByPost : action.payload
      };
    default:
      state;
  }
};
