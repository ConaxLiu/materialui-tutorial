import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import 'typeface-roboto'
import CreateDialog from '../exercises/Dialogs/Create'

function Header() {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit" style={{flex: 1}}>
            Exercise Database
          </Typography>
          <CreateDialog />
        </Toolbar>
      </AppBar>
  )
}

export default Header
