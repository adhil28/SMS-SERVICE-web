import React from 'react'
import '../Web.css'
import ExitIcon from '@mui/icons-material/ExitToAppRounded'
import DeleteIcon from '@mui/icons-material/DeleteForeverRounded'
import avatar from '../../../assets/user_icon_foreground.png'
import { Button, Grid, Typography } from '@mui/material'
import { onMessageRecived, sendMessage } from '../Helper/Fcm'
import { mobileToken } from '../../../Global/Global'
import ProgressDialogue from '../../ProgressDialogue/ProgressDialogue'
import { useState } from 'react'
import localforage from 'localforage'
function Account() {
    const [openProgresDialogue, setopenProgresDialogue] = useState(false)
    return (
        <div>
            <div className="classic pro">
                <center>
                    <img src={avatar} alt="user" style={{ width: '120px' }} />
                    <br />
                    <Typography component={'span'}>Name</Typography>
                    <br />
                    <Typography component={'span'} style={{ margTop: '0' }}></Typography>
                </center>
            </div>
            <div className="classic pro">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Button onClick={() => {
                            setopenProgresDialogue(true)
                            sendMessage({ "req": "lgt-api", "web": true }, mobileToken).then((r) => {
                                onMessageRecived().then((m) => {
                                    if (m.data.req == "lgt-api") {
                                        setopenProgresDialogue(false)
                                        mobileToken = 'null'
                                        localforage.clear((r)=>{
                                            window.location.reload()
                                        })
                                    }
                                })
                            })
                        }} color="warning" startIcon={<ExitIcon />} fullWidth style={{ borderRadius: '10px', padding: '15px' }} variant="outlined">Log out</Button>
                    </Grid>
                </Grid>
            </div>
            <ProgressDialogue open={openProgresDialogue} />
        </div>
    )
}

export default Account