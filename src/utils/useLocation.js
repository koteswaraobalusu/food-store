import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setError, setLoading, setLocationSuccess } from '../app/userLocationSlice';

export const useLocation = () => {
    const dispatch=useDispatch();


    const getUserLocation=()=>{
        dispatch(setLoading())
        navigator.geolocation.getCurrentPosition(
            async (position)=>{
                try{

                    const {latitude,longitude}=position.coords;

                    const res=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                    const data=await res.json();
                    dispatch(setLocationSuccess(data))
                }
                catch(error){
                    dispatch(setError(error.message))
                }
            },
            (error)=>{
                dispatch(setError(error.message))
            }
        )

    }
    useEffect(
        ()=>{
            getUserLocation()
        },[]
    )
    return ;
}

