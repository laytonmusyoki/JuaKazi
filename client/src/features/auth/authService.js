import api from "../../utils/axiosInstance";


const register=async (user)=>{
    const res=await api.post('register/',user);
    return res.data
}


const authService={
    register
}

export default authService