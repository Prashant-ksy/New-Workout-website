import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Edit = () => {
    const token = localStorage.getItem('token');
    const { id } = useParams();
    const { data, error, refetch } = useFetch({
        url: 'https://workoutapi-fjcr.onrender.com/api/workouts/' + id,
        token: token
    });

    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [successEdit, setSuccessEdit] = useState('');

    const saveChanges = (e) => {
        e.preventDefault();
        const newWorkout = { reps, load };

        fetch('https://workoutapi-fjcr.onrender.com/api/workouts/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(newWorkout)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to create workout');
                }
                return response.json();
            })
            .then((UpdatedWorkoutObj) => {
                console.log('Edited Workout:', UpdatedWorkoutObj);
                setSuccessEdit("Workout edited successfully!!");
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        // Only update state if data is available
        if (data) {
            setTitle(data.title);
            setReps(data.reps);
            setLoad(data.load);
        }
    }, [data]);

    if (data === null) {
        return (
            <div>Loading...</div>
        );
    } else if (error) {
        return (
            <div>Error: {error}</div>
        );
    } else {
        return (
            <div className="edit">
                <h2>Edit Here!</h2>
                <p>Title: {title}</p>
                <form onSubmit={saveChanges}>
                    <label>Reps:</label>
                    <input
                        type="number"
                        required
                        value={reps}
                        onChange={(e) => setReps(Number(e.target.value))}
                    />
                    <label>Load:</label>
                    <input
                        type="number"
                        required
                        value={load}
                        onChange={(e) => setLoad(Number(e.target.value))}
                    />
                    <button>Save Changes</button>
                </form>
                <div className="success-edit">{successEdit}</div>
            </div>
        );
    }
}

export default Edit;
