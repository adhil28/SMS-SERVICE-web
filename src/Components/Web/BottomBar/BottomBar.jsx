import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { Component, useState } from 'react'
import LanIcon from '@mui/icons-material/Lan';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/WhatsappRounded';
import SmsIcon from '@mui/icons-material/SmsRounded'
import AccountIcon from '@mui/icons-material/AccountCircleRounded'
function BottomBar({ onClickListner,value,setValue }) {
  const navButtons = [
    { label: 'Home', icon: <HomeIcon />, key: 0 },
    { label: 'Api', icon: <LanIcon />, key: 1 },
    { label: 'WhatsApp', icon: <CallIcon />, key: 2 },
    { label: 'Sms', icon: <SmsIcon />, key: 3 },
    { label: 'Account', icon: <AccountIcon />, key: 3 }
  ]
  
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        onClickListner(newValue)
      }}
    >
      {navButtons.map((button) => {
        return (
          <BottomNavigationAction label={button.label} icon={button.icon} key={button.key} />
        )
      })}

    </BottomNavigation>
  )
}

export default BottomBar