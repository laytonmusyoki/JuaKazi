import { useDispatch } from "react-redux";
import api from "../../utils/axiosInstance";
import { setCredentials } from "./userSlice";



const register=async (user)=>{
    const res=await api.post('register/',user);
    return res.data
}


const login=async (user)=>{
    const res=await api.post('signin/',user)
    // dispatch(setCredentials(res.data))
    return res.data
}


const authService={
    register,
    login
}

export default authService