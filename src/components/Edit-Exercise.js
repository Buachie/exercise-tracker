import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const EditExercise = (props) => {

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
    const setUser = (e) => {
        setUsers(users.concat(e))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        }

        axios.post('http://localhost:5000/exercises/update/'+props.match.params.id, exercise)
            .then(res => console.log(res.data));

        console.log(exercise);
        window.location = '/';
    }

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => {
                console.log(res.data)
                
                if (res.data.length > 0) {
                    setUser(res.data.map(user => user.username))
                }
            })
    }, [])

    const inputRef = useRef("userInput")

    return (
        <div>
            <h3>Edit Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select ref={inputRef} required className="form-control" onChange={setName}>
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
                    <input type="submit" value="Update Exercise Log" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default EditExercise
