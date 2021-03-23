import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../Api/userApi";
import storage from '../../Constant/storage-keys';



export const register = createAsyncThunk(
    'users/register',
    async (payload) => {
        //call api 
      const data = await userApi.register(payload);
      
      //save data to localStorage
      localStorage.setItem(storage.token , data.jwt);
      localStorage.setItem(storage.user , JSON.stringify(data.user));
    
      //return data user
      return  data.user;
    }
)
export const login = createAsyncThunk(
    'users/login',
    async (payload) => {
        //call api 
      const data = await userApi.login(payload);
      
      //save data to localStorage
      localStorage.setItem(storage.token , data.jwt);
      localStorage.setItem(storage.user , JSON.stringify(data.user));
    
      //return data user
      return  data.user;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(storage.user)) || {},
        settings: {},
    },
    reducers: {
        logOut( state , action ){
            localStorage.removeItem(storage.token);
            localStorage.removeItem(storage.user);

            state.current = {};
        }
    },
    extraReducers: {
        [ register.fulfilled ] : ( state, action ) => {
            state.current = action.payload
        },
        [ login.fulfilled ] : ( state, action ) => {
            state.current = action.payload
        },
    }
});

const { actions , reducer } = userSlice;
export const { logOut } = actions
export default reducer ; // default export
