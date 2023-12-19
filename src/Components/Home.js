import { useState } from "react";
import useFetch from "./useFetch";
import Workouts from "./Workouts";

const Home = () => {

    const token = localStorage.getItem('token');
    
    const { data,refetch} = useFetch({
        url: 'https://workoutapi-fjcr.onrender.com/api/workouts',
        token: token,
    });

    const fetchData=()=>{
        refetch();
    }

    console.log(data);
    return (
        <div className="Home">
            {data && <Workouts data={data} token={token} fetchData={fetchData}/>}
        </div>
    );



}

export default Home;