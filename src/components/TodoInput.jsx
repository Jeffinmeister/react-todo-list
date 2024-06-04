import { useState } from 'react'

export default function TodoInput(props) {
  const {handleAddTodos,todoValues,setTodoValues}=props
  return (
   <header>
    <input placeholder='enter input' value={todoValues} onChange={(e)=>{
      setTodoValues(e.target.value)
    }}/>
    <button type="button" onClick={()=>{
       if(todoValues){
        handleAddTodos(todoValues)
      }  
      setTodoValues('');
    }}>Add</button>
   </header> 
  )
}
