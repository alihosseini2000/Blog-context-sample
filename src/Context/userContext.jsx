import { actionType } from "../utils/constant";
import axios from "axios";
import { apiUrl } from "../utils/constant";
import { useContext, useReducer, createContext } from "react";
import PropTypes from "prop-types";
import { userReducer } from "../reducers/index";

const initialState = {
  singleUserLoading: false,
  singleUserError: false,
  singleUser: [],
};

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  async function fetchSingleUser(id) {
    dispatch({ type: actionType.GET_SINGLE_USER_BEGIN });
    try {
      const response = await axios.get(`${apiUrl.USER_URL}/${id}`);
      const singleUser = response.data;

      dispatch({
        type: actionType.GET_SINGLE_USER_SUCCESS,
        payload: singleUser,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionType.GET_SINGLE_USER_ERROR,
      });
    }
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        fetchSingleUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};

export const useUserContext = () => {
  return useContext(UserContext);
};
