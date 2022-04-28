import React from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { CircularProgress } from '@mui/material';

function ProgressDialogue({open}) {
    return (
        <Dialog open={open}>
            <center style={{margin:'30px'}}><CircularProgress /></center>
        </Dialog>
    );
}

export default ProgressDialogue