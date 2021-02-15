import React, { useState, useEffect } from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo'
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

// useEffect(()=> {
// db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
//   setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
// })
// }, [])

  const addToDo = event => {
    event.preventDefault()

    // db.collection('todos').add({
    //   todo: input,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // })
    // setTodos([...todos, input])
    setInput('')
  }

  const todoData = todos.map(todo => (
    <Todo todo={todo} />
    ))

  return (
    <div className="App">
      <h1>The Obligatory ToDo List</h1>

      <form>

      <FormControl>
        <InputLabel >🏈 🏋🏽‍♀️ 🤿</InputLabel>
        <Input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} 
        />
      </FormControl>

        <Button 
        disabled={!input} 
        type="submit" onClick={addToDo} 
        variant="contained" 
        color="primary">
          Add a MisterTODO 
        </Button>
        
      </form>



      <ul>
        {todoData}
      </ul> 
    </div>
  );
}

export default App;
