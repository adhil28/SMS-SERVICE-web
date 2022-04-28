import { Button, CircularProgress, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../Web.css'
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import WhatChart from './Chart/WhatChart';
import { sendMessage, onMessageRecived } from '../Helper/Fcm'
import { mobileToken } from '../../../Global/Global'
import { getData } from '../Helper/FireStore';
import LightModeIcon from '@mui/icons-material/LightMode';
import MessagesList from './MessagesList/MessagesList';
import WakeUpDialogue from './WakeUpDialogue'
import ProgressDialogue from '../../ProgressDialogue/ProgressDialogue';
function Whatsapp() {

    const [data, setdata] = useState([])
    const [open, setOpen] = useState(false)
    const [openProgressDialogue, setOpenProgressDialogue] = useState(false)
        ;
    let retry = 0

    const fetchDetails = () => {
        sendMessage({ req: 'w-m', web: 'true' }, mobileToken).then((m) => {
            onMessageRecived().then((p) => {
                if (p.data.req == 'w-m') {
                    getData().then((messagesData) => {
                        if (messagesData['w-m'] != null) {
                            setdata(messagesData['w-m'])
                            retry = 0
                        } else {
                            retry = retry + 1
                            if (retry < 4) {
                                fetchDetails()
                            }
                        }
                    })
                } else {
                    retry = retry + 1
                    if (retry < 4) {
                        fetchDetails()
                    }
                }
            })
        })
    }
    useEffect(() => {
        fetchDetails()
    }, [])


    return (
        <div>
            <div className="classic pro">
                <center>
                    {data.length === 0 ? <CircularProgress /> : <WhatChart data={data} />}
                </center>
            </div>
            <div className="classic pro">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Button onClick={() => {
                            fetchDetails()
                        }} color="warning" startIcon={<AutorenewRoundedIcon />} fullWidth style={{ borderRadius: '10px', padding: '15px' }} variant="outlined">Reload graph</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button onClick={()=>{
                            setOpen(true)
                        }} color="info" startIcon={<LightModeIcon />} fullWidth style={{ borderRadius: '10px', padding: '15px' }} variant="outlined">Set wake up message</Button>
                    </Grid>

                </Grid>
            </div>
            <div className="classic pro">
                <center>
                    {data.length === 0 ? <CircularProgress /> : <MessagesList data={data} />}
                </center>
            </div>
            <WakeUpDialogue key={"whatsapp-wd"} open={open} setOpen={setOpen} onSubmit={(phone) => {
                setOpenProgressDialogue(true)
                sendMessage({ "req": "wms-api", "web": true,phone }, mobileToken).then((r) => {
                    onMessageRecived().then((m) => {
                        setOpenProgressDialogue(false)
                        alert('Wake up message set successfully')
                    })
                })
            }} />
            <ProgressDialogue open={openProgressDialogue} key="whatsapp-pd" />
        </div>
    )
}

export default Whatsapp