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
    } catch (error) {
      console.error("❌ Register error:", error);
  
      const fallback = "Something went wrong. Please try again.";
  
      // Only try to access response if it exists
      const res = error?.response;
  
      if (!res) {
        return thunkAPI.rejectWithValue(fallback);
      }
  
      const data = res.data;
  
      if (Array.isArray(data?.error)) {
        return thunkAPI.rejectWithValue(data.error.join(', '));
      }
  
      if (typeof data?.error === 'string') {
        return thunkAPI.rejectWithValue(data.error);
      }
  
      if (typeof data?.error === 'object') {
        return thunkAPI.rejectWithValue(
          Object.values(data.error).flat().join(', ') || fallback
        );
      }
  
      return thunkAPI.rejectWithValue(error.message || fallback);
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
