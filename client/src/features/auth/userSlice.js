import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";


const initialState=({
    user:null,
    access:null,
    refresh:null,
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:''
})

export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {
      console.log('Sending userData:', userData); 
      return await authService.register(userData);
    } catch (err) {
        const errorData=(err.response && err.response.data && err.response.data.error) || err.message.toString()
        return thunkAPI.rejectWithValue(errorData)
    }
  });
  

export const login=createAsyncThunk('auth/login',async(userData,thunkAPI)=>{
    try{
        return await authService.login(userData)
    }
    catch(err){
        const message=(err.response && err.response.data && err.response.data.error) || err.message.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
    
  


export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setCredentials:(state,actions)=>{
            const { user,access,refresh } =actions.payload
            state.user=user,
            state.access=access,
            state.refresh=refresh
        },
        logout:(state)=>{
            state.user=null,
            state.access=null,
            state.refresh=null,
            localStorage.removeItem('persist:root');
        },
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
          }
          
    },
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(register.fulfilled,(state)=>{
            state.isLoading=false
            state.isSuccess=true
        })
        .addCase(register.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })
        .addCase(login.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(login.fulfilled,(state)=>{
            state.isLoading=false
            state.isSuccess=true
        })
        .addCase(login.rejected,(state,action)=>{
            state.isError=true
            state.isLoading=false
            state.message=action.payload
        })
    }
});


export const { setCredentials,logout,reset }=userSlice.actions

export default userSlice.reducer
