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
        const res=await api.post('register/',userData);
        return res.data
    } catch (err) {
        const message=JSON.stringify(err.response.data.error)
        return thunkAPI.rejectWithValue(message || 'Something went wrong')
    }
  });
  
    
  


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
            state.refresh=null
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
    }
});


export const { setCredentials,logout,reset }=userSlice.actions

export default userSlice.reducer
