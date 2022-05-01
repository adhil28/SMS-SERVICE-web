import { Alert, AlertTitle, Button, Grid } from '@mui/material'
import React, { Component, useEffect, useState } from 'react'
import '../Web.css'
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';
import LockClockRoundedIcon from '@mui/icons-material/LockClockRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import { onMessageRecived, sendMessage } from '../Helper/Fcm';
import { api, mobileToken } from '../../../Global/Global'
import AuthDialogue from './AuthDialogue';
import ProgressDialogue from '../../ProgressDialogue/ProgressDialogue';

function Api() {
    const [open, setOpen] = useState(false)
    const [openProgressDialogue, setOpenProgressDialogue] = useState(false)
    const [isAlertBoxOpen, setAlertBoxOpen] = useState(false)
    const [alertBoxMessage, setAlertBoxMessage] = useState('')

    return (
        <div>
            <div className="classic pro">

                API KEY : 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'<br />
                Total calls : <br />
                Active <div className="green-circle" />

            </div>
            <div className="classic pro">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Button onClick={() => {
                            setOpenProgressDialogue(true)
                            sendMessage({ "req": "rvk-api", "web": true }, mobileToken).then((r) => {
                                onMessageRecived().then((m) => {
                                    if (m.data.req == "rvk-api") {
                                        api = m.data.api
                                        setAlertBoxMessage("Api revoked successfully")
                                        setAlertBoxOpen(true);
                                        setTimeout(() => {
                                            setAlertBoxOpen(false)
                                        }, 3000);
                                        setOpenProgressDialogue(false)
                                    }
                                })
                            })
                        }} color="warning" startIcon={<AutorenewRoundedIcon />} fullWidth style={{ borderRadius: '10px', padding: '15px' }} variant="outlined">Revoke api</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button onClick={() => {
                            setOpenProgressDialogue(true)
                            sendMessage({ "req": "tgl-api", "web": true }, mobileToken).then((r) => {
                                onMessageRecived().then((m) => {
                                    if (m.data.req == "tgl-api") {
                                        if(m.data.active=='true'){
                                            setAlertBoxMessage("Api key enabled successfully")
                                        }else{
                                            setAlertBoxMessage("Api key disabled successfully")
                                        }
                                        setAlertBoxOpen(true);
                                        setTimeout(() => {
                                            setAlertBoxOpen(false)
                                        }, 3000);
                                        setOpenProgressDialogue(false)
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
                        <Button onClick={() => {
                            alert(api)
                        }} color="error" startIcon={<ContentCopyRoundedIcon />} fullWidth style={{ borderRadius: '10px', padding: '15px' }} variant="outlined">copy api</Button>
                    </Grid>
                </Grid>
            </div>
            <AuthDialogue key={"Api-ad"} onSubmit={(username, password) => {
                setOpenProgressDialogue(true)
                sendMessage({ username, password, "req": "ath-api", "web": true }, mobileToken).then((r) => {
                    onMessageRecived().then((m) => {
                        if (m.data.req == "ath-api") {
                            setAlertBoxMessage("Authenetication added successfully")
                            setAlertBoxOpen(true);
                            setTimeout(() => {
                                setAlertBoxOpen(false)
                            }, 3000);
                            setOpen(false)
                            setOpenProgressDialogue(false)
                        }
                    })
                })
            }} open={open} setOpen={setOpen} />
            <ProgressDialogue key={"Api-pd"} open={openProgressDialogue} />
            <center>
                <Alert style={{ width: 'fit-content', opacity: !isAlertBoxOpen ? "0" : "1", transition: "all .2s", visibility: !isAlertBoxOpen ? "hidden" : "visible" }} severity="success">
                    <AlertTitle>Success</AlertTitle>
                    {alertBoxMessage}
                </Alert>
            </center>
        </div>
    )
}

export default Api