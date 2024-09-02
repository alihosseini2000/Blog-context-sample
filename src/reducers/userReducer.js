import { actionType } from "../utils/constant";

export const userReducer = ( state , action )=> {
    switch (action.type) {
        case actionType.GET_SINGLE_USER_BEGIN:
            return{
                ...state,
                singleUserLoading : true,
            }
        case actionType.GET_SINGLE_USER_ERROR:
            return{
                ...state,
                singleUserLoading : false,
                singleUserError: true
            }
            case actionType.GET_SINGLE_USER_SUCCESS:
                return{
                    ...state,
                    singleUserLoading : false,
                    singleUser : action.payload
                }
        default:
            state;
    }
}