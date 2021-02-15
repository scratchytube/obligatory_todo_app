import React, { useState } from 'react'
import './Todo.css'
import DeleteIcon from '@material-ui/icons/Delete';
import { List, ListItem, ListItemText, Modal } from '@material-ui/core';

const Todo = ({ todo }) => {
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState("")

    const handleModal = () => {
        setOpen((open) => !open)
    }

    const handleUpdateTodo = () => {

    }
    
    
    
    return (
        <>
        <Modal
        open={open}
        onClose={handleModal}
        >
            <div>
                <h3>sup w it from the modal sonnn</h3>
                <input placeholder={todo.todo} value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={handleUpdateTodo} >Update me puhlease</button>
            </div>
        </Modal>
        <List>
            <ListItem>
                
                <ListItemText primary={todo.todo} secondary="Do this stupid⏰" />
            </ListItem>
            <button onClick={handleModal} >Update Meh</button>
            <DeleteIcon />
        </List>
        </>
    )
}

export default Todo
