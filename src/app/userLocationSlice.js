import { createSlice } from "@reduxjs/toolkit";
const initialState={
    locationDetails:null,
    loading:false,
    error:null
}
const userLocationSlice=createSlice({
    name:'location',
    initialState,
    reducers:{
        setLoading:(state)=>{
            state.loading=true,
            state.error=null
        },
        setLocationSuccess:(state,action)=>{
            state.loading=false,
            state.locationDetails=action.payload,
            state.error=null
        },
        setError:(state,action)=>{
            state.error=action.payload,
            state.loading=false
        }
    }
})

export const { setLoading,setLocationSuccess,setError }=userLocationSlice.actions;
export default userLocationSlice.reducer