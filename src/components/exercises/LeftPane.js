import React, { Fragment, useContext } from 'react'
import { Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { DataContext } from '../../App'

function LeftPane({ styles }) {

  const {groupedExercises: exercises, selectedMuscle, selectExercise, deleteExercise } = useContext(DataContext)

  return (
    <Paper style={styles.Paper}>
      {
        exercises.map(([muscle, muscleExercises], index) =>
          selectedMuscle === 'all' || muscle === selectedMuscle ?
          <Fragment key={index}>
            <Typography variant="h6" style={{ textTransform: 'capitalize' }}>
              {muscle}
            </Typography>
            <List component="nav">
              {muscleExercises.map(({title, id}) => (
              <ListItem button key={title} onClick={() => selectExercise(id, false)} >
                <ListItemText primary={title} />
                <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={()=>{selectExercise(id, true)}}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={()=>{deleteExercise(id)}}>
                  <DeleteIcon />
                </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              ))}
            </List>
          </Fragment>
          :
          null
        )
      }
    </Paper>
  )
}

export default LeftPane