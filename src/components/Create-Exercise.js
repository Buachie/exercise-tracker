import React, { useCallback, useEffect, useState, useRef } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = () => {

    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]); 

    const setName = (e) => {
        setUsername(e.target.value)
    };
    const setDesc = (e) => { 
        setDescription(e.target.value)
    };
    const setLength = (e) => {
        setDuration(e.target.value)
    };
    const setTime = (date) => {
        setDate(date)
    };
    const setUser = () => {
        setUsers('')
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        }
        console.log(exercise);
        window.location = '/';
    }

    useEffect(() => {
        setUsers(['Test User'])
        setUsername('Test User')
    }, [])
const inputRef = useRef("userInput")

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select ref={inputRef} required className="form-control" value={username} onChange={setName}>
                        {users.map((user) => {
                            return <option key={user} value={user}>{user}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" required className="form-control" value={description} onChange={setDesc}/>
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input type="text" className="form-control" value={duration} onChange={setLength}/>
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={date}
                            onChange={setTime}
                        />
                    </div>
                </div>
                
                <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default CreateExercise
