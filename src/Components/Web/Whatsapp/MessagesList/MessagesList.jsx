import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WhatsappIcon from '@mui/icons-material/WhatsappRounded';


import React from 'react'

function MessagesList({ data }) {
    return (
        <List sx={{ width: '100%', maxWidth: '90%', bgcolor: 'background.paper',cursor:'move' }}>
            {data.map((message, i) => {
                return (
                    <ListItem key={"ml-"+i}>
                        <ListItemAvatar>
                            <Avatar>
                                <WhatsappIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={message.phone} secondary={(message.message+"\n"+(message.date.split(' ')[0]))} />
                    </ListItem>
                )
            })}
        </List>
    )
}

export default MessagesList