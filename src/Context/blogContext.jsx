import { useContext, useReducer, useEffect ,createContext } from "react";
import PropTypes from "prop-types";
import { actionType } from "../utils/constant";
import {blogReducer} from "../reducers/index";
import { apiUrl } from "../utils/constant";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const initialState = {
  blogsLoading: false,
  blogsError: false,
  blogs: [],
  tempBlogs: [],
  singleBlogLoading: false,
  singleBlogError: false,
  singleBlog: [],
  searchTerm: "",
  searchBlogsLoading: false,
  searchBlogsError: false,
};

const BlogsContext = createContext({});

export const BlogsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);
  
  const fetchBlogs = async () => {
    dispatch({
      type: actionType.GET_BLOGS_BEGIN,
    });
    try {
      const response = await axios.get(apiUrl.BLOG_URL);
      dispatch({
        type: actionType.GET_BLOGS_SUCCESS,
        payload: response.data.posts, 
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionType.GET_BLOGS_ERROR,
      });
    }
  };

  const fetchSingleBlog = async (id) => {
    dispatch({
      type: actionType.GET_SINGLE_BLOG_BEGIN,
    });
    try {
      const response = await axios.get(`${apiUrl.BLOG_URL}/${id}`);
      dispatch({
        type: actionType.GET_SINGLE_BLOG_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.GET_SINGLE_BLOG_ERROR });
    }
  };

  const fetchBlogsFromSearch = async (searchTerm) => {
    dispatch({ type: actionType.GET_BLOG_BY_SEARCHTERM_BEGIN });
    try {
      const response = await axios.get(`${apiUrl.SEARCH_URL}${searchTerm}`);
      dispatch({
        type: actionType.GET_BLOG_BY_SEARCHTERM_SUCCESS,
        payload: response.data.posts,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.GET_BLOG_BY_SEARCHTERM_ERROR });
    }
  };

  const setSearchTerm = (searchTerm) => {
    dispatch({
      type: actionType.SET_SEARCH_TERM,
      payload: searchTerm,
    });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogsContext.Provider
      value={{
        ...state,
        fetchSingleBlog,
        fetchBlogsFromSearch,
        setSearchTerm,
      }}>
      {children}
    </BlogsContext.Provider>
  );
};

BlogsProvider.propTypes ={
  children: PropTypes.node
}

export const useBlogsContext = () => {
  return useContext(BlogsContext);
};
