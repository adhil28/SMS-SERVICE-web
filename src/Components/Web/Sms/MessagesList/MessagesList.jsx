import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SmsIcon from '@mui/icons-material/SmsRounded';


import React from 'react'

function MessagesList({ data }) {
    return (
        <List sx={{ width: '100%', maxWidth: '90%', bgcolor: 'background.paper', cursor: 'move' }}>
            {data.map((message, i) => {
                return (
                    <ListItem key={"sms-"+i}>
                        <ListItemAvatar>
                            <Avatar>
                                <SmsIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={message.phone} secondary={(message.message + "\n" + (message.date.split(' ')[0]))} />
                    </ListItem>
                )
            })}
        </List>
    )
}

export default MessagesList