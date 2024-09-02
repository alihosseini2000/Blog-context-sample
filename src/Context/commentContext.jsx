import { createContext, useReducer , useContext } from "react";
import { actionType } from "../utils/constant";
import { apiUrl } from "../utils/constant";
import {commentReducer} from "../reducers/index"
import axios from "axios";
import PropTypes from "prop-types"

const initialState = {
  commentsByPostLoading: true,
  commentsByPostError: false,
  commentsByPost: [],
};

const CommentContext = createContext({});

export const ComponentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commentReducer, initialState);

  const fetchCommentsByPost = async (id) => {
    dispatch({ type: actionType.GET_COMMENTS_BY_POST_BEGIN });
    try {
      const response = await axios.get(`${apiUrl.COMMENT_BY_POST_URL}/${id}`);
      dispatch({
        type: actionType.GET_COMMENTS_BY_POST_SUCCESS,
        payload: response.data.comments,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.GET_COMMENTS_BY_POST_ERROR });
    }
  };

  return (
    <CommentContext.Provider
      value={{
        ...state,
        fetchCommentsByPost,
      }}>
      {children}
    </CommentContext.Provider>
  );
};

ComponentProvider.propTypes ={
    children: PropTypes.node
}

export const useCommentContext =() => {
    return useContext(CommentContext)
}
