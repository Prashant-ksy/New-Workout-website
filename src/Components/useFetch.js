import {useEffect, useState} from 'react';

const useFetch = ({url,token}) =>{
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    
    const fetchData=()=>{
        const abortCont=new AbortController();

        fetch(url,{
            headers: {"Authorization":`Bearer ${token}`,}
        })
            .then((res)=>{
                if(!res.ok){
                    console.log(res);
                    throw Error('could not fetch the data.')
                }
                return res.json();
            })
            .then((data)=>{
                console.log("Fetched successfully!!");
                setData(data);
                setError(null);
            })
            .catch(err=>{
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                }
                else
                setError(err.message);
            })

            return()=>abortCont.abort();
    
    }

    useEffect(fetchData,[url,token])

    return {data,error,refetch:fetchData};

}

export default useFetch;