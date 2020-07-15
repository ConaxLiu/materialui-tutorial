import React, { useState } from 'react';
//import './App.css';

import { Header, Footer } from './components/layouts'
import Exercises from './components/exercises'
import { muscles, exercises } from './store'

export const DataContext = React.createContext()

const initialSelectedExercise = {
  title: 'Welcome',
  description: 'Please select an exercise to start.'
}

function App() {
  const [exerciseList, setExerciseList] = useState(exercises)
  const [selectedMuscle, setSelectedMuscle] = useState('all')
  const [selectedExercise, setSelectedExercise] = useState(initialSelectedExercise)
  const [editing, setEditing] = useState(false) // true = editing, false = viewing

  const groupExercisesByMuscles = () => {
    const exercisesByMuscleGroup = muscles.reduce((result, muscle) => {
      return {...result, [muscle]:[]}
    }, {})

    console.log("exercisesByMuscleGroup", exercisesByMuscleGroup)

    // return exerciseList.filter(exercise => exercise.muscles === muscle)
    return exerciseList.reduce((result, exercise) => {
        const {muscle} = exercise
  
        result[muscle] = [...result[muscle], exercise]
  
        return result
      }, exercisesByMuscleGroup)
  }

  let groupedExercises = groupExercisesByMuscles()
  console.log("groupedExercises", groupedExercises)
  groupedExercises = Object.entries(groupedExercises)
  console.log("Object.entries", groupedExercises)

  /****************************************************************************
   * Handlers
   ***************************************************************************/
  const selectMuscle = muscle => {
    setSelectedMuscle(muscle)
  }

  const selectExercise = (exerciseId, editing) => {
    console.log("Selecting exercise", exerciseId, editing)
    const exercise = exerciseList.find(ex => ex.id === exerciseId)

    console.log("Selected exercise is ", exercise)
    setSelectedExercise(exercise)
    setEditing(editing)
  }

  const addExercise = exercise => {
    setExerciseList([
      ...exerciseList,
      exercise
    ])
    setSelectedExercise(exercise)
  }

  const updateExercise = exercise => {
    console.log("updateExercise", exercise)
    setExerciseList([
      ...exerciseList.filter(ex => ex.id !== exercise.id),
      exercise
    ])
    setSelectedExercise(exercise)
    setEditing(false)
  }

  const deleteExercise = exerciseId => {
    setExerciseList(
      exerciseList.filter(exercise => exercise.id !== exerciseId)
    )

    if(selectedExercise.id === exerciseId) {
      setSelectedExercise(initialSelectedExercise)
      setEditing(false)
    }
  }

  const contextValues = {
    muscles,
    groupedExercises,
    selectMuscle,
    selectedMuscle,
    selectExercise,
    selectedExercise,
    editing,
    addExercise,
    updateExercise,
    deleteExercise
  }
  
  return (
    <DataContext.Provider value={contextValues}>
      <div className="App">
        <Header />
        <Exercises />
        <Footer/>
      </div>
    </DataContext.Provider>
  );
}

export default App;
