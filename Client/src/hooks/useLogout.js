import {useAuthContext} from "./useAuthContext";
import { useNavigate } from "react-router";


export const useLogout = ()=>{
    const {dispatch} = useAuthContext();
    const navigate = useNavigate();

    const logout = ()=>{
        // remove user from storage
        localStorage.removeItem("user");

        // dispatch logout action
        dispatch({type: "LOGOUT"})
    }
    navigate("/")

    return {logout}
}