import { Link } from "react-router-dom";

const Workouts = ({ data, token,fetchData}) => {
    // const history =useHistory();
    
    const deleteData = (_id) => {
        console.log("https://workoutapi-fjcr.onrender.com/api/workouts/" + _id)
        fetch("https://workoutapi-fjcr.onrender.com/api/workouts/" + _id,
        {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${token}` }
            
        })
        .then(res => {
            console.log(res);
            fetchData();
        })
    }
    
    

    return (
        <div className="workouts">


            {data.map(workout => (
                <div className="workout-details" key={workout._id}>

                    <p>Title:{workout.title}</p>
                    <p>Reps:{workout.reps}</p>
                    <p>Load:{workout.load}</p>

                    {/* <button onClick={()=>{editData(workout._id)}}>Edit</button> */}
                    <Link to={`/Edit/${workout._id}`}>Edit</Link>
                    <button onClick={() => { deleteData(workout._id) }}>Delete</button>
                </div>
            ))

            }
        </div>
    );
}

export default Workouts;