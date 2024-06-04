import { useState,useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

const [todos,setTodos]=useState([
 
])
const [todoValues,setTodoValues]=useState('')
function persistData(newList) {
  localStorage.setItem('todos',JSON.stringify({todos:newList}))
  
}

function handleAddTodos(newTodos){
  const newTodoList=[...todos,newTodos]
  persistData(newTodoList)
  setTodos(newTodoList)
}
function handleEditTodo(index) {
  const valueToBeEdited=todos[index]
  setTodoValues(valueToBeEdited)
  handleDeleteTodo(index)
}
function handleDeleteTodo(index) {
  const newTodoList=todos.filter((todo,todoIndex)=>{
    return todoIndex !==index
  })
  persistData(newTodoList)

  setTodos(newTodoList)

} 
useEffect(()=>{
if(!localStorage){
  return 
}

let localTodos=localStorage.getItem('todos')
if(!localTodos){
  return
}
localTodos=JSON.parse(localTodos).todos
setTodos(localTodos)

},[])
return (
   <>
    <TodoInput todoValues={todoValues} setTodoValues={setTodoValues} handleAddTodos={handleAddTodos}/>
    <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
   </>
  )
}

export default App
