import React from 'react'
import './Todo.css'
import { List, 
    ListItem, 
    // ListItemAvatar, 
    ListItemText } from '@material-ui/core';

const Todo = ({ text }) => {
    return (

        <List>
            <ListItem>
                {/* <ListItemAvatar>
                </ListItemAvatar> */}
                <ListItemText primary={text} secondary="Do this stupid⏰" />
            </ListItem>
        </List>
    )
}

export default Todo
