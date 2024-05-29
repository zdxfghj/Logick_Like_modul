import {  useState, useCallback } from "react";

export const useHttps = () =>{
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<boolean>(false);

    const request = useCallback(async(url:string, method:string = 'GET', body = null, headers = null)=>{
        setLoading(true);
        try {
            const response = await fetch(url,{method, body});
            if(!response.ok){
                throw new Error(`Could not fetch ${url}, status ${response.status}`); 
            }
            const data = await response.json();
            setLoading(false);
            return data;
        } catch (error) {
            setLoading(false);
            setError(!error);
            throw(error)
        }
    },[])

    const clearError = useCallback(()=>setError(!error),[]);

    return {loading,request,error,clearError}
}