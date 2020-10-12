import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import ExercisesList from './components/Exercises';
import EditExercise from './components/Edit-Exercise';
import CreateExercise from './components/Create-Exercise';
import CreateUser from './components/Create-User';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component = {ExercisesList}/>
        <Route path="/edit/:id" component = {EditExercise}/>
        <Route path="/create" component = {CreateExercise}/>
        <Route path="/user" component = {CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
