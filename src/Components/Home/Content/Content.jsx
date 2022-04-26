import { Button, Grid } from '@mui/material'
import React from 'react'
import './Content.css'
import logo from '../../../assets/banner.png'
import { useNavigate } from 'react-router-dom'
function Content() {

    const nav = useNavigate()

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <div id='content'>
                <center>
                    <div>
                        <img src={logo} className="banner" />
                    </div>
                    <p className='description'>Mobile SMS Service Helps you to send SMS and WhatsApp Message from server <br></br> using Android device</p>
                    <Button variant="contained" style={{ padding: '15px 20px 15px 20px', backgroundColor: '#0176D5', borderRadius: '30px',marginTop:'13px' }}>Download Mobile SMS Service</Button>
                    <div style={{ marginTop: '20px' }}>
                        <Button onClick={() => {
                            nav('/docs')
                        }} variant='outlined' style={{ borderColor: '#0176D5', borderRadius: '30px', display: 'inline-block', padding: '12px 20px 12px 20px' }}>SEE DOCS</Button> <Button style={{ borderColor: '#0176D5', borderRadius: '30px', padding: '12px 20px 12px 20px', display: 'inline-block' }} variant='outlined' onClick={() => {
                            nav('/web')
                        }} >WEB APP</Button>
                    </div>
                </center>
            </div>
        </Grid>


    )
}

export default Content