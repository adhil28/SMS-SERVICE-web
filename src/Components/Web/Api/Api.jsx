import { Button, Grid } from '@mui/material'
import React, { Component, useEffect, useState } from 'react'
import '../Web.css'
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';
import LockClockRoundedIcon from '@mui/icons-material/LockClockRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import { onMessageRecived, sendMessage } from '../Helper/Fcm';
import { mobileToken } from '../../../Config/Global'
import AuthDialogue from './AuthDialogue';

function Api() {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className="classic pro">

                API KEY : 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'<br />
                Total calls : '21321'<br />
                Active <div className="green-circle" />

            </div>
            <div className="classic pro">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Button onClick={() => {
                            sendMessage({ "req": "rvk-api", "web": true }, mobileToken).then((r) => {
                                console.log('revoke api', mobileToken);
                                onMessageRecived().then((m) => {
                                    if (m.data.req == "rvk-api") {
                                        window.location.reload()
                                    }
                                })
                            })
                        }} color="warning" startIcon={<AutorenewRoundedIcon />} fullWidth style={{ borderRadius: '10px', padding: '15px' }} variant="outlined">Revoke api</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button onClick={() => {
                            sendMessage({ "req": "tgl-api", "web": true }, mobileToken).then((r) => {
                                onMessageRecived().then((m) => {
                                    if (m.data.req == "tgl-api") {
                                        alert('Done')
                                    }
                                })
                            })
                        }} color="info" startIcon={<BlockRoundedIcon />} fullWidth style={{ borderRadius: '10px', padding: '15px' }} variant="outlined">enable/disable api</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button onClick={() => {
                            setOpen(true)
                        }} color="success" startIcon={<LockClockRoundedIcon />} fullWidth style={{ borderRadius: '10px', padding: '15px' }} variant="outlined">enable/disable Authentication</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button color="error" startIcon={<ContentCopyRoundedIcon />} fullWidth style={{ borderRadius: '10px', padding: '15px' }} variant="outlined">copy api</Button>
                    </Grid>
                </Grid>
            </div>
            <AuthDialogue onSubmit={(username, password) => {
                console.log(username,password);
                sendMessage({ username, password, "req": "ath-api", "web": true }, mobileToken).then((r) => {
                    console.log(r);
                    onMessageRecived().then((m) => {
                        if (m.data.req == "ath-api") {
                            alert('Authentication added')
                        }
                    })
                })
            }} open={open} setOpen={setOpen} />
        </div>
    )
}

export default Api