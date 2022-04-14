import { Container } from '@mui/material'
import React from 'react'
import TopPanel from '../TopPanel/TopPanel'
import './Docs.css'
function Docs() {

  const curlyBracketOpen = "{"
  const curlyBracketClose = "}"
  return (
    <div>
      <TopPanel active="DOCS" />
      <Container style={{ marginBottom: '30px' }}>
        <h3>Docs</h3>
        <h2 style={{ marginBottom: '0' }}>Installation</h2>
        <div className="code">
          <font color="red">npm</font> i <font color="green">sms-service-node</font>
        </div>
        <div className="code">
          <font color="red">yarn</font> add <font color="green">sms-service-node</font>
        </div>
        <h2 style={{ marginBottom: '0' }}>Usage</h2>
        <div className="code">
          <font color="darkblue">const</font> {curlyBracketOpen}<font color="red">SmsService</font>{curlyBracketClose}  <font color="darkblue">=</font>  <font color="blue">require</font>(<font color="darkgreen">"sms-service-node"</font>)
          <br />
          <font color="darkblue">const</font> <font color="red">service</font> <font color="darkblue">=</font> <font color="darkblue">new</font> <font color="blue">SmsService</font>()
        </div>
        <div className="code">
          <font color="grey">//to send SMS</font><br />
          service.<font color="blue">sendSms</font>(<font color="skyblue">{curlyBracketOpen}</font><br />
          &emsp;&emsp;&emsp;&emsp;api: <font color="darkgreen">'YOUR API KEY'</font>,<br />
          &emsp;&emsp;&emsp;&emsp;message: <font color="darkgreen">'HELLO FROM NODE JS'</font>,<br />
          &emsp;&emsp;&emsp;&emsp;phone: <font color="darkgreen">'91XXXXXXXXXX'</font>,<br />
          &emsp;&emsp;&emsp;&emsp;plat: <font color="darkgreen">'sms'</font>,<br />
          &emsp;&emsp;&emsp;&emsp;userName: <font color="darkblue">null</font>, <font color="grey">//if auth is disabled</font><br />
          &emsp;&emsp;&emsp;&emsp;password: <font color="darkblue">null</font> <font color="grey">//if auth is disabled</font><br />
          <font color="skyblue">{curlyBracketClose}</font>)
        </div>
        <div className="code">
          <font color="grey">//to send WhatsApp message</font><br />
          service.<font color="blue">sendSms</font>(<font color="skyblue">{curlyBracketOpen}</font><br />
          &emsp;&emsp;&emsp;&emsp;api: <font color="darkgreen">'YOUR API KEY'</font>,<br />
          &emsp;&emsp;&emsp;&emsp;message: <font color="darkgreen">'HELLO FROM NODE JS'</font>,<br />
          &emsp;&emsp;&emsp;&emsp;phone: <font color="darkgreen">'91XXXXXXXXXX'</font>,<br />
          &emsp;&emsp;&emsp;&emsp;plat: <font color="darkgreen">'whatsapp'</font>,<br />
          &emsp;&emsp;&emsp;&emsp;userName: <font color="darkblue">null</font>, <font color="grey">//if auth is disabled</font><br />
          &emsp;&emsp;&emsp;&emsp;password: <font color="darkblue">null</font> <font color="grey">//if auth is disabled</font><br />
          <font color="skyblue">{curlyBracketClose}</font>)
        </div>
      </Container>
    </div>
  )
}

export default Docs