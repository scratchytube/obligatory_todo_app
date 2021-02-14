import React, { useState } from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take the rubbish out', 'masterbate', 'download tinder' ])
  const [input, setInput] = useState('')

  const addToDo = event => {
    event.preventDefault()
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="App">
      <h1>Hello you putz</h1>
      <form>

      <FormControl>
        <InputLabel >Write a mister TODO</InputLabel>
        <Input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} 
        />
      </FormControl>

        <Button disabled={!input} type="submit" onClick={addToDo} variant="contained" color="primary">Add a MisterTODO </Button>
        
      </form>



      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul> 
    </div>
  );
}

export default App;
