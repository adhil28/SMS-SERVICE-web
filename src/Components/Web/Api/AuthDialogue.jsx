import { Dialog, DialogTitle, TextField, DialogContent, Button,DialogContentText,DialogActions } from '@mui/material'
import React from 'react'

function AuthDialogue({onSubmit,open,setOpen}) {
    let username,password;
    return (
        <Dialog open={open} >
            <DialogTitle>Auth</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter your email and passsword for authenetication
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="username"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e)=>{
                        username = e.target.value
                    }}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="password"
                    type="password"
                    fullWidth
                    variant="standard"
                    onChange={(e)=>{
                        password = e.target.value
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{
                    setOpen(false)
                }}>Cancel</Button>
                <Button onClick={(e)=>{
                    onSubmit(username,password)
                }} >Submit</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AuthDialogue