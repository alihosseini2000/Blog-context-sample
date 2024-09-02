import {actionType} from '../utils/constant';

export const sidebarReducer = (state , action) => {
    switch (action.type) {
        case actionType.OPEN_SIDBAR:
            return{
                ...state,
                isSidebarOpen: true
            }
            case actionType.CLOSE_SIDBAR:
                return{
                    ...state,
                    isSidebarOpen : false
                }
        default:
            return state; 
    }
}