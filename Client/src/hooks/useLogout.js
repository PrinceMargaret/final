import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
  };
  useEffect(() => {
    navigate("/");
  }, []);

  return { logout };
};
