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
      // Log the full structure for debugging
      console.log('❌ Register error:', error);
  
      const fallbackMessage = "Something went wrong. Please try again.";
      
      if (!error.response) {
        return thunkAPI.rejectWithValue(fallbackMessage);
      }
  
      const data = error.response.data;
      
      if (Array.isArray(data?.error)) {
        return thunkAPI.rejectWithValue(data.error.join(', '));
      }
  
      if (typeof data?.error === 'string') {
        return thunkAPI.rejectWithValue(data.error);
      }
  
      if (typeof data?.error === 'object') {
        const combined = Object.values(data.error).flat().join(', ');
        return thunkAPI.rejectWithValue(combined || fallbackMessage);
      }
  
      return thunkAPI.rejectWithValue(error.message || fallbackMessage);
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
