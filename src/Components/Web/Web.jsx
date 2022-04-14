import { CircularProgress, Grid } from '@mui/material'
import React from 'react'
import './Web.css'
import '../../Config/Config'
function Web() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >

            <Grid item xs={3}>
                <div>
                    <CircularProgress />
                </div>
            </Grid>

        </Grid>
    )
}

export default Web