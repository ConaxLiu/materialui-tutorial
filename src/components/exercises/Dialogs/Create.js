import React, { useState, useContext } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, Button } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { DataContext } from '../../../App'
import Form from './Form'

function Create() {
  const {addExercise} = useContext(DataContext)
  const [open, setOpen] = useState(false)
 
  const handleSave = (exercise) => {
    addExercise({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(' ', '-')
    })
    setOpen(false)
  }

  return (
    <>
      <Button variant="text" style={{color: 'white'}} onClick={() => {setOpen(true)}}>
        <AddCircleIcon />
      </Button>
      <Dialog 
        open={open} 
        onClose={()=>{setOpen(false)}} 
        >
        <DialogTitle id="form-dialog-title">Create Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter exercise details:
          </DialogContentText>
          <Form save={handleSave} selectedExercise={null}/>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Create
