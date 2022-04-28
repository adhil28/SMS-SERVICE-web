import { Dialog, DialogTitle, TextField, DialogContent, Button,DialogContentText,DialogActions } from '@mui/material'
import React from 'react'

function AuthDialogue({onSubmit,open,setOpen}) {
    let phone;
    return (
        <Dialog open={open} >
            <DialogTitle>Auth</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter phone number of your sim card 
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="phone"
                    type="tel"
                    fullWidth
                    variant="standard"
                    onChange={(e)=>{
                        phone = e.target.value
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{
                    setOpen(false)
                }}>Cancel</Button>
                <Button onClick={(e)=>{
                    onSubmit(phone)
                }} >Submit</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AuthDialogue