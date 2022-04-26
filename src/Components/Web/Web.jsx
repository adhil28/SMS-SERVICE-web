import { Button, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import './Web.css'
import { getFCMToken, onMessageRecived, sendConnectInfo } from './Helper/Fcm'
import QRCode from "react-qr-code";
import TopPanel from '../TopPanel/TopPanel'
import avatar from '../../assets/user_icon_foreground.png'
import apiIcon from '../../assets/api_icon_foreground.png'
import whatsappIcon from '../../assets/whatsapp_icon_foreground.png'
import smsIcon from '../../assets/message_icon_foreground.png'
import accountIcon from '../../assets/account_icon_foreground.png'
import { mobileToken, apiKey } from '../../Config/Global'
import { useNavigate } from 'react-router-dom'
import BottomBar from './BottomBar/BottomBar';
import Api from './Api/Api'
import { signIn } from './Helper/FAuth'
import Whatsapp from './Whatsapp/Whatsapp'
import Sms from './Sms/Sms'
import Account from './Account/Account'
function Web() {

    const [QrLoaded, setQrLoaded] = useState(false)
    const [mtToken, setMyToken] = useState(null)
    const [selectedPage, setselectedPage] = useState(0)
    const [BottomBarSelectedValue, setBottomBarSelectedValue] = useState(0);
    const [connected, setConnected] = useState(false)

    const QrCodeDiv = () => (
        <div>
            <center><h3>Scan this code in your phone</h3></center>

            <div className='classic'>
                <QRCode value={mtToken} />
            </div>
        </div>

    )

    const WebView = () => (
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
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6} >
                        <Button color="info" fullWidth variant='outlined' onClick={() => {
                            setselectedPage(1)
                            setBottomBarSelectedValue(1)
                        }}>
                            <div>
                                <img style={{ width: '60px' }} src={apiIcon} />
                                <h3 className='card-title'>API</h3>
                                <p className='card-desc'>Manage your API key<br />Authenetication, revoke, read</p>
                            </div>
                        </Button>
                    </Grid>
                    <Grid color="success" item xs={12} md={6} >
                        <Button onClick={() => {
                            setselectedPage(2)
                            setBottomBarSelectedValue(2)
                        }} fullWidth variant='outlined'>
                            <div>
                                <img style={{ width: '60px' }} src={whatsappIcon} />
                                <h3 className='card-title'>Whatsapp</h3>
                                <p className='card-desc'>Manage your whatsapp settings<br />Service, wake up message</p>
                            </div>
                        </Button>
                    </Grid>
                    <Grid color="error" item xs={12} md={6} >
                        <Button onClick={() => {
                            setselectedPage(3)
                            setBottomBarSelectedValue(3)
                        }} fullWidth variant='outlined'>
                            <div>
                                <img style={{ width: '60px' }} src={smsIcon} />
                                <h3 className='card-title'>Sms</h3>
                                <p className='card-desc'>Manage your SMS Settings<br />Daily limit, serivce</p>
                            </div>
                        </Button>
                    </Grid>
                    <Grid color="error" item xs={12} md={6} >
                        <Button onClick={() => {
                            setselectedPage(4)
                            setBottomBarSelectedValue(4)
                        }} fullWidth variant='outlined'>
                            <div>
                                <img style={{ width: '60px' }} src={accountIcon} />
                                <h3 className='card-title'>API</h3>
                                <p className='card-desc'>Manage your Account<br />Logout, delete account</p>
                            </div>
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

    useEffect(() => {
        document.getElementById('body').style.backgroundColor = '#f1f1f1'
        getFCMToken().then((token) => {
            console.log(token);
            setMyToken(token)
            setQrLoaded(true)
            onMessageRecived().then((payload) => {
                if (payload.data.sender != null) {
                    signIn().then((r) => {
                        console.log('Mobile token set');
                        mobileToken = payload.data.sender
                        setConnected(true)
                    }).catch((error) => {
                        console.log('Unexpected error occured');
                        window.location.href = "/"
                    })

                }
            })
        })

    }, [])




    return (
        <div>
            {mobileToken != 'null' ?
                <div>
                    <BottomBar value={BottomBarSelectedValue} setValue={setBottomBarSelectedValue} onClickListner={(page) => {
                        setselectedPage(page)
                    }} />
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="normal"
                        justifyContent="normal"
                        style={{ minHeight: '100vh' }}
                    >
                        <Grid item xs={3}>
                            <div>
                                {selectedPage === 0 ? <WebView /> : selectedPage === 1 ? <Api /> : selectedPage == 2 ? <Whatsapp /> : selectedPage == 3 ? <Sms /> : <Account />}
                            </div>
                        </Grid>

                    </Grid>
                </div> :
                <div>
                    <TopPanel />

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
                                {QrLoaded ? connected ? <WebView /> : <QrCodeDiv /> : <CircularProgress />}
                            </div>
                        </Grid>

                    </Grid>
                </div>
            }


        </div>


    )
}

export default Web