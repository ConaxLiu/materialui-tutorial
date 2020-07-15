import React, { useState, useContext } from 'react'
import { TextField, FormControl, Select, MenuItem, InputLabel, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { DataContext } from '../../../App'

const styles = theme => (
  {
  formControl: {
    minWidth: 300,
    marginBottom: theme.spacing(2)
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

function Form({
  selectedExercise, 
  save, // Function to either create or update an exercise
  classes
  }) {

  const {muscles} = useContext(DataContext)

  const initExercise = {
    id: '', 
    title: '', 
    description: '', 
    muscle: ''
  }
  
  const [exercise, setExercise] = useState(selectedExercise || initExercise)
  const {title, description, muscle} = exercise

  const handleChange = ({target}) => {
    setExercise({
      ...exercise,
      [target.name] : target.value
    })
  }

  const handleSubmit = () => {
    save(exercise)
    setExercise(initExercise)
  }

  return (
    <form autoComplete="off">
      <TextField id="title" name="title" value={title} 
        label="Title" 
        onChange={handleChange}
        required fullWidth 
        className={classes.formControl}
      /><br />
      
      <TextField id="description" name="description" value={description} 
        label="Description" 
        onChange={handleChange}
        required fullWidth
        multiline rows={4} 
        className={classes.formControl}
      /><br />

      <FormControl  fullWidth>
        <InputLabel id="muscle">Muscle</InputLabel>
        <Select id="muscle" name="muscle" value={muscle}
          onChange={handleChange}
          variant="standard"
          labelId="muscle"
          className={classes.formControl}
        >
          {muscles.map(muscle => 
            <MenuItem key={muscle} value={muscle}>{muscle}</MenuItem>
          )}
        </Select>
      </FormControl>
      <Button color="primary" variant="contained" style={{float: 'right'}} onClick={handleSubmit}>
        Save
      </Button>
    </form>
  )
}

export default withStyles(styles)(Form)