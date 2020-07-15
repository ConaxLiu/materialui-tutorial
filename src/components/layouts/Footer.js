import React, {useContext} from 'react'
import {Paper, Tabs, Tab, withWidth} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { DataContext } from '../../App'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function Footer({width}) {
  const {muscles, selectedMuscle, selectMuscle} = useContext(DataContext)

  const classes = useStyles()
  // console.log("Footer muscles", muscles, "selectedMuscle", selectedMuscle)
  // const [tabsValue, setTabsValue] = useState(0)
  console.log("Footer width", width)
  const muscleIndex = muscles.findIndex(muscle => muscle === selectedMuscle) + 1
  // console.log("muscleIndex", muscleIndex)

  const handleTabSelect = (event, index) => {
    index === 0 ? selectMuscle('all') : selectMuscle(muscles[index-1])
  }
  
  return (
    <Paper className={classes.root}>
      <Tabs
        value={muscleIndex} 
        onChange={handleTabSelect}
        indicatorColor="primary"
        textColor="primary"
        centered={width !== 'xs' && width !== 'sm'}
        variant={width === 'xs' || width === 'sm' ? "scrollable" : "fullWidth"}
        scrollButtons={width === 'xs' || width === 'sm' ? "on" : "off"}
        >
        <Tab label="all" key={0}  />
        {muscles.map((muscle, idx) => 
          <Tab label={muscle} key={muscle} />
        )}
      </Tabs>
    </Paper>
  )
}

export default withWidth()(Footer)
