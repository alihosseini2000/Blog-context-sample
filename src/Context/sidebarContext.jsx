import {useContext , useReducer ,createContext } from "react";
import {sidebarReducer} from "../reducers/index";
import { actionType } from "../utils/constant";
import PropTypes from "prop-types"

const initialState ={
    isSidebarOpen: false
}
const SidebarContext = createContext();

export const SidebarProvider = ({children}) => {
    const [ state , dispatch ] = useReducer(sidebarReducer , initialState)

    const openSidebar = () => {
        dispatch({
            type: actionType.OPEN_SIDBAR
        })
    }

    const closeSidebar = () =>{
        dispatch({
            type : actionType.CLOSE_SIDBAR
        })
    }

    return(
        <SidebarContext.Provider value={{
            ...state ,
            openSidebar,
            closeSidebar
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

SidebarProvider.propTypes ={
    children: PropTypes.node
}

export const useSidebarContext = () => {
    return useContext(SidebarContext);
}
