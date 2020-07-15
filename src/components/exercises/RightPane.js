import React, { useContext } from 'react'
import { Paper, Typography } from '@material-ui/core'
import Form from './Dialogs/Form'
import { DataContext } from '../../App'

function RightPane({styles}) {
  const { selectedExercise, editing, updateExercise } = useContext(DataContext)

  const {id, title, description} = selectedExercise
  console.log("id", id)
  return (
    <Paper style={styles.Paper}>
      <Typography variant="h4" gutterBottom>{title}</Typography>
      {
        editing ?
        <Form key={id} selectedExercise={selectedExercise} save={updateExercise} />
        :
        <Typography variant="body1">{description}</Typography>
      }
    </Paper>
  )
} 

export default RightPane
