import { actionType } from "../utils/constant";

export const blogReducer = (state, action) => {
  switch (action.type) {
    case actionType.GET_BLOGS_BEGIN:
      return {
        ...state,
        blogsLoading: true,
      };
    case actionType.GET_BLOGS_SUCCESS:
      return {
        ...state,
        blogsLoading: false,
        blogs: action.payload,
        tempBlogs: action.payload,
      };
    case actionType.GET_BLOGS_ERROR:
      return {
        ...state,
        blogsLoading: false,
        blogsError: true,
      };
    case actionType.GET_BLOG_BY_SEARCHTERM_BEGIN:
      return {
        ...state,
        searchBlogsLoading: true
      };
    case actionType.GET_BLOG_BY_SEARCHTERM_SUCCESS:
        return {
            ...state,
            searchBlogsLoading: false,
            blogs: action.payload
          };
    case actionType.GET_BLOG_BY_SEARCHTERM_ERROR:
        return {
            ...state,
            searchBlogsLoading: false,
            searchBlogsError: true
          };
    case actionType.GET_SINGLE_BLOG_BEGIN:
      return {
        ...state,
        singleBlogLoading: true,
      };
    case actionType.GET_SINGLE_BLOG_SUCCESS:
      return {
        ...state,
        singleBlogLoading: false,
        singleBlog: action.payload,
      };
    case actionType.GET_SINGLE_BLOG_ERROR:
      return {
        ...state,
        singleBlogLoading: false,
        singleBlogError: true,
      };
    case actionType.SET_SEARCH_TERM:
        return{
            ...state,
            searchTerm: action.payload
        }
    default:
      return state;
  }
};


