import React from 'react'
import { Grid } from '@material-ui/core'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

export default () => {
  const styles = {
    Paper: {
      padding: 20,
      marginTop: 10,
      marginBottom: 10,
      height: 500,
      overflowY: 'auto'
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <LeftPane styles={styles} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <RightPane styles={styles} />
      </Grid>
    </Grid>
  )
}
