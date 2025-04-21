
import { setCredentials } from "../features/auth/userSlice";
import axios from "axios"
import { getStore } from "./storeHolder";


const baseUrl='http://127.0.0.1:8000/api/'
const api=axios.create({
    baseURL:baseUrl
});


api.interceptors.request.use(
    (config)=>{
        const state=getStore().getState()
        const token=state.user.access
        if(token){
            config.headers.Authorization=`Bearer ${token}`;
        }
        return config;
    },
    (error)=>Promise.reject(error)
);


api.interceptors.response.use(
    (response)=>response,
    async (error)=>{
        const originalRequest=error.config;
        if(error.response?.status===401 && !originalRequest._retry){
            originalRequest._retry=true
            try{
                const state=getStore().getState()
                const refreshToken=state.user.refresh;
                const res=await api.post('token/refresh/',{
                    refresh:refreshToken
                });

                const { access } =res.data;
                const user=state.user.user
                getStore().dispatch(setCredentials({user,access,refreshToken}))
                originalRequest.headers.Authorization=`Bearer ${access}`
                return api(originalRequest)
            }
            catch(err){
                getStore.dispatch(logout())
                return Promise.reject(err)
            }
        }
        (error)=>Promise.reject(error)
    }
);


export default api