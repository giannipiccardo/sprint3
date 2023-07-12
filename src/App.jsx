import { useState } from 'react'
import Header from "./assets/components/Header/Header"
import List from "./assets/components/Todo/List"
import Form from "./assets/components/Todo/Form"
// import Content from "./assets/components/Todo/Content"
import './App.css'


function App() {
  const [theme, setTheme] = useState("dark")
  const [list, setList] = useState([
    { id: 1, content: "Tomar agua", completed: true },
    { id: 2, content: "Finalizar práctica de estados y props", completed: false },
    { id: 3, content: "Tomar agua", completed: false },
    { id: 4, content: "Compartir lo aprendido con algún compañero", completed: false },
    { id: 5, content: "Probar pizza italiana", completed: false },
    { id: 6, content: "Completar el desafio del sprint 3", completed: false },
  ]);
  let itemsLeft = list.filter((todo) => !todo.completed)
  let amountItemsLeft = itemsLeft.length
  // console.log(amountItemsLeft)

  return (
    <>
      <Header theme={theme} setTheme={setTheme}></Header>
      <div className='task-container'>
        <Form list={list} setList={setList}></Form>
        <List list={list} setList={setList}></List>
        <span>Items Left: {amountItemsLeft}</span>
      </div>
      {/* <Content theme={theme} /> */}
    </>
  )
}

export default App;