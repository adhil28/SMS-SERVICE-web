import { Button, CircularProgress, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../Web.css'
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import SmsChart from './Chart/SmsChart';
import { sendMessage, onMessageRecived } from '../Helper/Fcm'
import { mobileToken } from '../../../Global/Global'
import { getData } from '../Helper/FireStore';
import MessagesList from './MessagesList/MessagesList'

function Sms() {

  const [data, setdata] = useState([])

  let retry = 0;

  const fetchDetails = () => {
    sendMessage({ req: 's-m', web: 'true' }, mobileToken).then((m) => {
      onMessageRecived().then((p) => {
        if (p.data.req == 's-m') {
          getData().then((messagesData) => {
            if (messagesData['s-m'] != null) {
              setdata(messagesData['s-m'])
              retry = 0
            } else {
              retry = retry + 1
              if (retry < 4) {
                fetchDetails()
              }
            }
          })
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
          {data.length === 0 ? <CircularProgress /> : <SmsChart data={data} />}
        </center>
      </div>
      <div className="classic pro">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Button onClick={() => {
              sendMessage({ req: 's-m', web: 'true' }, mobileToken).then((m) => {
                fetchDetails()
              })
            }} color="warning" startIcon={<AutorenewRoundedIcon />} fullWidth style={{ borderRadius: '10px', padding: '15px' }} variant="outlined">Reload graph</Button>
          </Grid>

        </Grid>
      </div>
      <div className="classic pro">
        <center>
          {data.length === 0 ? <CircularProgress /> : <MessagesList data={data} />}
        </center>

      </div>
    </div>
  )
}

export default Sms