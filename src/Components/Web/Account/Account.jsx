import React from 'react'
import '../Web.css'
import ExitIcon from '@mui/icons-material/ExitToAppRounded'
import DeleteIcon from '@mui/icons-material/DeleteForeverRounded'
import avatar from '../../../assets/user_icon_foreground.png'
import { Button, Grid, Typography } from '@mui/material'
function Account() {
    return (
        <div>
            <div className="classic pro">
                <center>
                    <img src={avatar} alt="user" style={{ width: '120px' }} />
                    <br />
                    <Typography component={'span'}>SMS Service : <div style={{ width: '10px', background: 'green', height: '10px', borderRadius: '50%', display: 'inline-block' }} /></Typography>
                    <br />
                    <Typography component={'span'} style={{ margTop: '0' }}>WhatsApp Service : <div style={{ width: '10px', background: 'green', height: '10px', borderRadius: '50%', display: 'inline-block' }} /></Typography>
                </center>
            </div>
            <div className="classic pro">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Button onClick={()=>{
                            sendMessage({ "req": "lgt-api", "web": true }, mobileToken).then((r) => {
                                onMessageRecived().then((m) => {
                                    if (m.data.req == "tgl-api") {
                                        mobileToken = 'null'
                                        window.location.reload()
                                    }
                                })
                            })
                        }} color="warning" startIcon={<ExitIcon />} fullWidth style={{ borderRadius: '10px', padding: '15px' }} variant="outlined">Log out</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button color="error" startIcon={<DeleteIcon />} fullWidth style={{ borderRadius: '10px', padding: '15px' }} variant="outlined">Delete Account forever</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Account